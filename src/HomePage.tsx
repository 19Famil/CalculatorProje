import React from 'react';
 import {View, Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, } from 'react-native';
 const HomePage = () => {
  return (

    <View>
    <TouchableOpacity>
  <Image source={require('./qs.png')}
  style={styles.qs} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image source={require('./lupa.png')}
  style={styles.lupa} />
  </TouchableOpacity>
  <TouchableOpacity>
   <Image source={require('./canta.png')}
  style={styles.canta} />
   </TouchableOpacity>
  <Image source={require('./ss.png')}
  style={styles.ss} />
  <TouchableOpacity>
   <Image source={require('./buton1.png')}
  style={styles.buton1} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image source={require('./buton2.png')}
  style={styles.buton2} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image source={require('./burger.png')}
  style={styles.burger} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image source={require('./icki.png')}
  style={styles.icki} />
  </TouchableOpacity>
  <View>
  <Image source={require('./rice1.png')}
  style={styles.rice1} />
  <Image source={require('./icon1.png')}
  style={styles.icon1} />
  <Text style={styles.Still}>$180.35</Text>
    <TouchableOpacity>
  <Image source={require('./icon2.png')}
  style={styles.icon2} />
  <Text style={styles.plus}>+</Text>
  </TouchableOpacity>
  <Image source={require('./rice2.png')}
  style={styles.rice2} />
  <TouchableOpacity>
  <Image source={require('./reqem.png')}
  style={styles.reqem} />
  </TouchableOpacity>
  </View>
  <Text style={styles.text}>Popular</Text>
  <Text style={styles.text1}>New</Text>
  <View>
    <TouchableOpacity>
  <Image source={require('./yemek.png')}
  style={styles.yemek} />
  <Image source={require('./cercive.png')}
  style={styles.cercive} />
  <Text style={styles.text2}>Chicken Manchurian</Text>
  <Text style={styles.text3}>Chinese Cuisine</Text>
  <Text style={styles.text4}>$110.50</Text>
  </TouchableOpacity>
  <View>
    <TouchableOpacity>
  <Image source={require('./kub.png')}
  style={styles.kub} />
  <Text style={styles.text5}>></Text>
  </TouchableOpacity>
  </View>
  </View>
  </View>
  );
 };
 export default HomePage;
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
  marginTop: 30,
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
marginTop: -85,
},

rice1: {
    
  marginTop: 70,
  marginLeft: 20,
  borderRadius: 20,
},
icon1: {
     height: 34,
width: 123,
left: 35,
top: -40,
borderRadius: 10,
},
Still: {
fontSize: 18,
fontWeight: 700,
height: 25,
marginLeft: 60,
marginTop: -70,
color: 'white',
},
icon2: {
    height: 34,
    width: 34,
    left: 170,
    top: -30,
    borderRadius: 5,
    

},

plus: {
    height: 34,
    width: 34,
    left: 179,
    top: -67,
    fontSize: 27,
    color: 'white',
},

rice2: {
marginTop: -342,
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

