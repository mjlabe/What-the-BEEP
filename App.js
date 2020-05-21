/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>
//     </NavigationContainer>
//   );
// }

import BeepHeader from './main/beepHeader';
import Colors from './main/Colors';

const {width, height} = Dimensions.get('window');

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BeepHeader />
        <View style={styles.body}>
          <Image
            source={require('./main/images/dog_round.png')}
            alt=""
            style={styles.button}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.darker,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
