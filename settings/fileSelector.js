import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {FontAwesomeIcon, Props} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faFolderOpen} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faFolderOpen);

import AudioPicker from './docPicker';
import Colors from '../main/Colors';

// const [toggleCheckBox, setToggleCheckBox] = useState(false);

export default function AudioFile(props: Props) {
    return (
        <SafeAreaView style={[{width: props.width}]}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.black}/>
            <View style={styles.fileSelector}>
                <View>
                    <CheckBox
                        disabled={false}
                        value={true}
                        // onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                    />
                </View>
                <View>
                    <Text style={[styles.fileSelectorText, {width: props.width}]}>
                        {props.text !== '' ? props.text : 'Select audio file'}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => AudioPicker()}>
                        <FontAwesomeIcon icon={props.icon} color="white" marginLeft={10}/>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    fileSelector: {
        padding: 10,
        borderColor: Colors.light,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: Colors.dark,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fileSelectorText: {
        color: Colors.lighter,
    },
    fileIcon: {
        position: 'absolute',
        right: 0,
    },
});
