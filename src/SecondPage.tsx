import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
const SecondPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.watch}>9:41</Text>
        <View style={styles.headerTools}>
          <Image source={require('./signal.png')} />
          <Image source={require('./wifi.png')} />
          <Image source={require('./battery.png')} />
        </View>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('./vector.png')} />
        </TouchableOpacity>
        <Text style={styles.textcredit}>Credit / Debit Card</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('./card.png')} />
      </View>
      <View style={styles.photo}>
        <TouchableOpacity>
          <Image source={require('./photo.png')} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Name on card</Text>
        <TouchableOpacity style={styles.nameinfo}>
          <Text style={styles.nametext}>Leslee Harron</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Card number</Text>
        <TouchableOpacity style={styles.cardinfo}>
          <Text style={styles.cardtext}>4242 4242 4242 4242</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.datainfo}>
        <Image source={require('./data.png')} />
        <View style={styles.cvcinfo}>
          <Image source={require('./cvc.png')} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.usebutton}>
          <Text style={styles.usetext}>Use this card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SecondPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  watch: {
    color: '#000000',
    fontSize: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTools: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  button: {
    height: 42,
    width: 42,
    borderRadius: 8,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcredit: {
    fontSize: 22,
    fontWeight: '600',
    color: '#07122A',
    marginLeft: 25,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  card: {
    
  },
  photo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  nameinfo: {
    height: 48,
    width: 340,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#8698A8',
    marginBottom: 10,
  },
  nametext: {
    fontSize: 17,
    fontWeight: '500',
  },
  cardinfo: {
    height: 48,
    width: 340,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#8698A8',
    marginBottom: 10,
  },
  cardtext: {
    fontSize: 17,
    fontWeight: '500',
  },
  datainfo: {
    flexDirection: 'row',
  },
  cvcinfo: {
    marginLeft: 28,
  },
  usebutton: {
    height: 56,
    width: 340,
    borderRadius: 7,
    backgroundColor: '#07122A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usetext: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  footer: {
    marginTop: 30,
  },
});
