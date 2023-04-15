import React from 'react';
import {View, Image, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
 const SecondPage = () => {
  return (
  <View>
    <Text style={styles.Fond}>ENJOY FRIED RICE - 
THE BEST MEAL</Text>
<TouchableOpacity>
<Image source={require('./icon12.png')}
  style={styles.icon12} />
  <Text style={styles.noqte}>:</Text>
  <Text style={styles.noqte1}>.</Text>
  </TouchableOpacity>
<Image source={require('./fredrice.png')}
  style={styles.fred} />
 </View>
  );
 };
 export default SecondPage;

 const styles = StyleSheet.create({
Fond: {
    height: 400,
    width: 337,
    left: 18,
    top: 110,
    fontSize: 53,
    lineHeight: 50,
    fontWeight: '900'
 },
fred: {
    height: 450,
width: 250,
left: 3,
top: -190,
borderRadius: 0

},
icon12: {
    height: 80,
    width:80,
    marginLeft: 295,
    marginTop: -100,
},
noqte: {
    color: "white",
    height: 70,
    width: 50,
    left: 321,
    top: -85,
    fontSize: 50,
    fontWeight: '900',
},
noqte1: {
    color: "white",
    height: 70,
    width: 50,
    left: 335,
    top: -165,
    fontSize: 50,
    fontWeight: '900',
},

})

