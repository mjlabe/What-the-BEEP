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
import RadioForm from 'react-native-simple-radio-button';


import AudioFile from './settings/fileSelector';
import ToggleSwitch from './settings/switch';
import AudioPicker from './settings/docPicker';
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
        {label: 'Collar Beep', value: 0 },
        {label: 'Whistle', value: 1 },
        {label: 'Dog Whistle', value: 2 },
        {label: 'Click', value: 3 },
        {label: 'Blah', value: 4 },
        {label: 'Custom', value: 5 },
        {label: 'Custom', value: 6 },
        {label: 'Custom', value: 7 },
        {label: 'Custom', value: 8 },
        {label: 'Custom', value: 9 },
    ];

    function setState(value) {
        if (value.value > 4) {
            AudioPicker();
        } else {
            alert(value.value);
        }
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
                labelColor={Colors[GLOBAL.colorMode].light}
                selectedLabelColor={Colors[GLOBAL.colorMode].light}
                animation={true}
                onPress={(value) => {setState({value:value})}}/>
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
