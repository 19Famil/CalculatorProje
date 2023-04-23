import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.header2}>
          <View style={styles.signal}>
            <Image source={require('./signal.png')} />
          </View>
          <View style={styles.wifi}>
            <Image source={require('./wifi.png')} />
          </View>
          <View style={styles.battery}>
            <Image source={require('./battery.png')} />
          </View>
        </View>
      </View>
      <View style={styles.human}>
        <Image source={require('./human.png')} />
        <Text style={styles.title}>Hey Leslee,</Text>
        <Text style={styles.title1}>there’s a new course abaut</Text>
        <Text style={styles.title2}>Figma</Text>
        <Text style={styles.title3}>Find out how our new matching tool</Text>
        <Text style={styles.title4}>can help you learn another way</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.title5}>Discover the course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttontext}>
          <Text>Not now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#E5E5E5',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header2: {
    flexDirection: 'row',
    width: 60,
    height: 17,
    marginTop: 5,
  },
  time: {
    fontSize: 15,
    fontWeight: '900',
  },
  signal: {
    marginHorizontal: 2,
  },
  wifi: {
    marginHorizontal: 2,
  },
  battery: {
    marginHorizontal: 2,
  },
  human: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
  title1: {
    fontSize: 24,
    fontWeight: '900',
  },
  title2: {
    fontSize: 24,
    fontWeight: '900',
  },
  title3: {
    fontSize: 16,
    fontWeight: '300',
  },
  title4: {
    fontSize: 16,
    fontWeight: '300',
  },
  footer: {
    flex: 1,
    paddingVertical: 50,
  },
  button: {
    height: 58,
    width: 300,
    borderRadius: 7,
    backgroundColor: '#07122A',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 23,
  },
  title5: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  buttontext: {
    alignItems: 'center',
    marginTop: 20,
  },
});
