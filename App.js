import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    StatusBar,
    SafeAreaView,
    Button,
    TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Sound from 'react-native-sound';

import Colors from './main/Colors';

function HomeScreen({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Image
                        source={require('./main/images/dog-icon-light.png')}
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
            <StatusBar barStyle="light-content" backgroundColor={Colors.black}/>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => beep()}>
                    <Image
                        source={require('./main/images/dog_round.png')}
                        alt=""
                        style={styles.button}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

function SettingsScreen({navigation}) {
    return (
        <SafeAreaView style={styles.home}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.black}/>
            <View style={styles.body}>
                <Text>Details Screen</Text>
            </View>
        </SafeAreaView>
    );
}

let dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darker,
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
});

let url = './main/audio/beep.m4a';

function beep() {
    let sound1 = new Sound(require(url),
        (error, sound) => {
            if (error) {
                alert('error' + error.message);
                return;
            }
            sound1.play(() => {
                sound1.release();
            });
        });
}

const Stack = createStackNavigator();

function App() {
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
                            backgroundColor: Colors.black,
                        },
                        headerTintColor: '#fff',
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
                            backgroundColor: Colors.black,
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
}

export default App;
