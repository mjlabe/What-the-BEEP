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
                <View style={styles.checkBoxView}>
                    <CheckBox
                        disabled={false}
                        value={true}
                        style={styles.checkBox}
                        // boxType={"square"}
                        // onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
                    />
                </View>
                <View >
                    <Text numberOfLines={1} style={[styles.fileSelectorText, {width: props.width}]}>
                        {props.text !== '' ? props.text : 'Select audio file'}
                    </Text>
                </View>
                <View style={styles.fileIcon}>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
    },
    checkBoxView: {
        marginLeft: 12,
        marginTop: -6,
    },
    checkBox: {
        height: 30,
    },
    fileSelectorText: {
        flex: 1,
        color: Colors.lighter,
        textAlign: "center",
        paddingLeft: 40,
        paddingRight: 40,
    },
    fileIcon: {
        marginRight: 15,
    },
});
