import React from 'react';
 import {View, Image, StyleSheet, Text, SafeAreaView, } from 'react-native';
 import HomePage from './HomePage';
 import SecondPage from './SecondPage';
 const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
      {/* <SecondPage /> */}
   
    <View>
  <View>
  <Image source={require('./qs.png')}
  style={styles.qs} />
  <Image source={require('./lupa.png')}
  style={styles.lupa} />
   <Image source={require('./canta.png')}
  style={styles.canta} />
  <Image source={require('./ss.png')}
  style={styles.ss} />
   <Image source={require('./buton1.png')}
  style={styles.buton1} />
  <Image source={require('./buton2.png')}
  style={styles.buton2} />
  <Image source={require('./burger.png')}
  style={styles.burger} />
  <Image source={require('./icki.png')}
  style={styles.icki} />
  <Image source={require('./rice1.png')}
  style={styles.rice1} />
  <Image source={require('./icon1.png')}
  style={styles.icon1} />
  <Image source={require('./rice2.png')}
  style={styles.rice2} />
  <Image source={require('./reqem.png')}
  style={styles.reqem} />
  <Text style={styles.text}>Popular</Text>
  <Text style={styles.text1}>New</Text>
  </View>
  <View>
  <Image source={require('./yemek.png')}
  style={styles.yemek} />
  <Image source={require('./cercive.png')}
  style={styles.cercive} />
  <Text style={styles.text2}>Chicken Manchurian</Text>
  <Text style={styles.text3}>Chinese Cuisine</Text>
  <Text style={styles.text4}>$110.50</Text>
  <Image source={require('./kub.png')}
  style={styles.kub} />
  <Text style={styles.text5}>></Text>
  </View>
  </View>
  </SafeAreaView>
  );
 };
 export default App;
const styles = StyleSheet.create({
  qs:{
    marginTop: 20,
    marginLeft: 21,
 },  
  lupa: {
    width: 21,
   marginLeft: 320,
   marginTop: -15, 
  },
  canta: {
    width: 18,
    height: 22,
    marginLeft: 354,
    marginTop: -22
  },
  
ss: {
  marginTop: 40,
  marginLeft: 20,
  },

buton1: {
  width: 180,
  marginTop: 40,
  marginLeft: -30,
  marginEnd: 40,
    }, 

buton2: {
  width: 90,
  height: 90,
  marginTop: -70,
  marginLeft: 115,
},  

burger: {
  width: 70,
  height: 70,
  marginLeft: 220,
  marginTop: -90,
},

icki:{
width: 70,
height: 70,
marginLeft: 302,
marginTop: -70,
},

rice1: {
  height: 290,
width: 262,
left: -40,
top: 335,

  // marginTop: 70,
  // marginLeft: 20,
},
//   height: 100,
// width: 250,
// left: -20,
// top: 100,
//  borderRadius: 5,

rice2: {
marginTop: -286,
marginLeft: 240,
},

reqem: {
  marginLeft: 260,
  marginTop: -46
},
text: {
  fontSize: 25,
  fontWeight: "900",
  marginLeft: 20,
  marginTop: 20,
},
text1: {
 fontSize: 25,
 fontWeight: "300",
 marginLeft: 115,
 marginTop: -34,
},

yemek: {
  width: 70,
  height: 70,
  marginLeft: 37,
  marginTop: 20,
},
cercive: {
  marginTop: -78,
  marginLeft: 30,
},
text2: {
marginLeft: 120,
marginTop: -80,
fontSize: 18,
fontWeight: "900",
},
text3: {
marginLeft: 120,
marginTop: -5,
fontSize: 10,
fontWeight: "300",

},
text4: {
  marginLeft: 120,
  marginTop: 20,
  fontSize: 20,
  fontWeight: "800",
  
},
kub: {
  height: 45,
  width: 45,
  marginLeft: 305,
  marginTop: -62,
},
text5: {
  color: 'white',
  marginLeft: 316,
  marginTop: -56,
  fontSize: 45,
  fontWeight: "600",
  height: 200,
  width: 200,
  },
})


