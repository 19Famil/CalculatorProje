// import React from 'react';
// import {View, Image, StyleSheet, Text, SafeAreaView} from 'react-native';
// import HomePage from './HomePage';
// import SecondPage from './SecondPage';
// import Calculute from './Calculute';
// const App = () => {
//   return (
//     <SafeAreaView>
// <HomePage />
// {/* <SecondPage /> */}
//     </SafeAreaView>
//   );
// };
// export default App;

// import React  from 'react';
// import { useEffect, useState } from 'react';
// import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
// // import { useEffect, useState } from 'react';
// const App = () => {
//   const numbers = [7,8,9,4,5,6,1,2,3,0]

//   return (
//     <SafeAreaView style={styles.container}>
//        {/* <TouchableOpacity>
//         <Text style={styles.buttonText}>+</Text>
//       </TouchableOpacity> */}

//       {numbers.map((item, index) => {
//         return <Reqemler reqem={item} />;
//       })}
// {/*
//       // <TouchableOpacity>
//       //   <Text style={styles.buttonText}>+</Text>
//       // </TouchableOpacity> */}

//     </SafeAreaView>
//   );
// };

// export default App;
// const Reqemler = props => {
//   return(
//   <TouchableOpacity style={styles.button}>
//     <Text>{props.reqem}</Text>
//   </TouchableOpacity>
//   );
//   };
//   // export default App;
//   const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignContent: 'flex-end',
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: 'orange',
//     width: '30%',
//     height: 85,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//       marginBottom: 5,
//       marginHorizontal: 3,

//   },
//   buttonText: {
//     fontSize: 40,
//     color: 'white',
//   },
// });

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import Calculute from './Calculute';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomePage /> */}
      {/* <SecondPage />  */}
         <Calculute />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
