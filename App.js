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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './main/Colors';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.home}>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae"/>
            <View style={styles.body}>
                <Image
                    source={require('./main/images/dog_round.png')}
                    alt=""
                    style={styles.button}
                />
            </View>
        </SafeAreaView>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.home}>
            <Text>Details Screen</Text>
        </View>
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
        marginLeft: 10,
        height: dimensions.height/25 - 10,
        width: dimensions.height/25 - 10,
    },
});

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
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                                color="#fff"
                            />
                        ),
                        headerLeft: () => (
                            <Image
                                source={require('./main/images/dog-icon-light.png')}
                                alt=""
                                resizeMode={'stretch'}
                                style={styles.logo}
                            />
                        ),
                    }}
                />
                <Stack.Screen name="Settings" component={SettingsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
