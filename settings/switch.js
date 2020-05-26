import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Colors from '../main/Colors'
import GLOBAL from '../main/global'

export default function ToggleSwitch() {
    console.log(GLOBAL.colorMode !== 'dark');
    const [isEnabled, setIsEnabled] = useState(GLOBAL.colorMode !== 'dark');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Dark Mode:
            </Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                ios_backgroundColor="#3e3e3e"
                onValueChange={mode}
                value={isEnabled}
                style={styles.switch}
            />
        </View>
    );

    function mode() {
        console.log(GLOBAL.colorMode);
        setIsEnabled(previousState => !previousState);
        isEnabled ? GLOBAL.colorMode = 'dark' : GLOBAL.colorMode = 'light';
        // AsyncStorage.setItem("colorMode", JSON.stringify(GLOBAL.colorMode));
        // const value = AsyncStorage.getItem("colorMode");
        // console.log(value);
        // this.setState(GLOBAL.colorMode === 'light' )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors[GLOBAL.colorMode].lighter,
        marginRight: 20,
    },
});
