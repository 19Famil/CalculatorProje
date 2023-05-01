
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Calculator  from './Calculator ';
import Calculute  from './Calculute';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
      {/* <Calculute /> */}
      {/* <Kino /> */}
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
