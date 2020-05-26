import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import Sound from 'react-native-sound';
import SystemSetting from 'react-native-system-setting/SystemSetting';

import {AdMobBanner} from 'react-native-admob';

import Colors from './main/Colors'
GLOBAL = require('./main/global');
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


import AudioFile from './settings/fileSelector';
import ToggleSwitch from './settings/switch';
// import AsyncStorage from '@react-native-community/async-storage';

function HomeScreen({navigation, onFailToReceiveAd}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Image
                        source={GLOBAL.colorMode === 'dark' ? require('./main/images/dog-icon-light.png') : require('./main/images/dog-icon.png')}
                        alt=""
                        resizeMode={'stretch'}
                        style={styles.logo}
                    />
                </TouchableOpacity>
            ),
        });
    });
    return (
        <SafeAreaView style={styles.home}>
            <StatusBar backgroundColor={Colors["dark"].black}/>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => beep()}>
                    <Image
                        source={require('./main/images/dog_round.png')}
                        alt=""
                        style={styles.button}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.ads}>
                <AdMobBanner
                    adSize="banner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    testDeviceID={AdMobBanner.simulatorId}
                    didFailToReceiveAdWithError={onFailToReceiveAd}
                />
            </View>
        </SafeAreaView>
    );
}

function SettingsScreen({navigation}) {
    let radio_props = [
        {label: 'param1', value: 0 , color: Colors.light},
        {label: 'param2', value: 1 }
    ];

    function setState(value){
        alert(value.value);
    }

    return (
        <SafeAreaView style={styles.settings}>
            <StatusBar barStyle="light-content" backgroundColor={Colors[GLOBAL.colorMode].black}/>
            {/*<ToggleSwitch/>*/}
            {/*<View*/}
            {/*    style={{*/}
            {/*        borderBottomColor: Colors[GLOBAL.colorMode].dark,*/}
            {/*        borderBottomWidth: 1,*/}
            {/*        width: dimensions.width,*/}
            {/*        marginTop: -10,*/}
            {/*    }}*/}
            {/*/>*/}
            <HeaderTitle style={{textAlign: 'center', color: Colors[GLOBAL.colorMode].white}}>
                Sounds:
            </HeaderTitle>
            {/*<AudioFile id={1} text="test text" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={2} text="" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={3} text="test text" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={4} text="" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={5} text="test text" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={6} text="" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={7} text="test text" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={8} text="" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={9} text="test text" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            {/*<AudioFile id={10} text="" icon="folder-open" width={3 * dimensions.width / 4}/>*/}
            <RadioForm
                radio_props={radio_props}
                initial={0}
                formHorizontal={false}
                labelHorizontal={true}
                buttonColor={'#2196f3'}
                // labelStyle={{color: Colors.light}}
                animation={true}
                onPress={(value) => {setState({value:value})}}>
                <RadioButton >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                        // obj={obj}
                        // index={i}
                        // isSelected={this.state.value3Index === i}
                        // onPress={onPress}
                        borderWidth={1}
                        buttonInnerColor={'#e74c3c'}
                        // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                        buttonSize={40}
                        buttonOuterSize={80}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                    />
                    <RadioButtonLabel
                        // obj={obj}
                        // index={i}
                        // labelHorizontal={true}
                        // onPress={onPress}
                        labelStyle={{fontSize: 20, color: '#2ecc71'}}
                        // labelWrapStyle={{}}
                    />
                </RadioButton>
            </RadioForm>
        </SafeAreaView>
    );
}

let dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: Colors[GLOBAL.colorMode].darker,
    },
    settings: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: Colors[GLOBAL.colorMode].darker,
    },
    button: {
        width: dimensions.width / 2,
        height: dimensions.width / 2,
    },
    logo: {
        marginLeft: 8,
        height: 30,
        width: 30,
    },
    ads: {
        height: 60,
        marginTop: 50,
    },
});

let url = './main/audio/beep.m4a';

let sound1 = new Sound(require(url),
    (error, sound) => {
        if (error) {
            alert('error' + error.message);
            return;
        }
    });

function beep() {
    let init_vol = 0.8;
    SystemSetting.getVolume().then((volume) => {
        init_vol = volume;
    });
    SystemSetting.setVolume(1);
    sound1.play((success) => {
        if (success) {
            SystemSetting.setVolume(Number(init_vol));
        } else {
            console.log('playback failed due to audio decoding errors');
        }
    });
}

const Stack = createStackNavigator();

/**
 * @return {null}
 */
function App() {
    // let getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('dark');
    //         if(value !== null) {
    //             return value;
    //         }
    //     } catch(e) {
    //         return 'light'
    //     }
    // };
    //
    // getData().then(r => GLOBAL.colorMode === r);
    // const onFailToReceiveAd = (error) => console.log(error);
    //
    // if (GLOBAL.colorMode === null) {
    //     return null;
    // }
    // else {

        return (
            <NavigationContainer>
                <StatusBar barStyle="dark-content"/>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'What the BEEP?!',
                            headerStyle: {
                                backgroundColor: Colors[GLOBAL.colorMode].black,
                            },
                            headerTintColor: Colors[GLOBAL.colorMode].white,
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{
                            headerStyle: {
                                backgroundColor: Colors[GLOBAL.colorMode].black,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerBackTitleVisible: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    // }
}

export default App;
