import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import Colors from '../main/Colors';

export default function ToggleSwitch() {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Dark Mode:
            </Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: Colors.lighter,
        marginRight: 20,
    },
});
