/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
import type {Node} from 'react';
import {Text, StyleSheet, Dimensions, Image, View} from 'react-native';
import React from 'react';
import Colors from './Colors';

let headerHeight = Dimensions.get('window').height / 15;

if (headerHeight > 80) {
  headerHeight = 80;
}

const BeepHeader = (): Node => (
  <View style={styles.background}>
    <Text style={styles.inline}>
      <Image
        source={require('./images/dog-icon-light.png')}
        alt=""
        resizeMode={'stretch'}
        style={styles.logo}
      />
      <Text style={styles.text}>What the BEEP?!</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    height: headerHeight,
    backgroundColor: Colors.black,
  },
  inline: {
    marginLeft: 15,
  },
  logo: {
    height: headerHeight - 10,
    width: headerHeight - 10,
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    color: Colors.light,
    marginLeft: 15,
  },
});

export default BeepHeader;
