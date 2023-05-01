import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Calculator() {
  const [calculationText, setCalculationText] = useState('');
  const [resultText, setResultText] = useState('');

  const onButtonPress = (text: String) => {
    if (text === '=') {
      return calculate();
    }
    setCalculationText(calculationText + text);
  };

  const onOperatorClick = (operator: string) => {
    const lastChar = calculationText.slice(-1);

    if (
      lastChar === '+' ||
      lastChar === '-' ||
      lastChar === '*' ||
      lastChar === '/'
    ) {
      setCalculationText(calculationText.slice(0, -1) + operator);
      return;
    }

    setCalculationText(calculationText + operator);
  };

  const calculate = () => {
    let uzunluq = calculationText;
    let result = 0;
    let operator = '+' || '*';
    for (let i = 0; i < uzunluq.length; i++) {
      const xarakter = uzunluq.charAt(i);
      if (
        xarakter === '+' ||
        xarakter === '-' ||
        xarakter === '*' ||
        xarakter === '/'
      ) {
        operator = xarakter;
      } else {
        const number = parseFloat(uzunluq.slice(i));
        if (!isNaN(number)) {
          if (operator === '+') {
            result += number;
          } else if (operator === '-') {
            result -= number;
          } else if (operator === '*') {
            result *= number;
          } else {
            result /= number;
          }
          i += number.toString().length - 1;
        }
      }
    }
    setResultText(result.toString());
  };

  const onClearClick = () => {
    setCalculationText('');
    setResultText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculation}>
        <Text style={styles.calculationtext}>{calculationText}</Text>
        <Text style={styles.resulttext}>{resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('7')}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('8')}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('9')}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('4')}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('5')}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('6')}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('1')}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('2')}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('3')}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('0')}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('.')}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('=')}>
              <Text style={styles.operatorButtons}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operator}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onClearClick()}>
            <Text style={styles.operatorButtons}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onOperatorClick('/')}>
            <Text style={styles.operatorButtons}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onOperatorClick('*')}>
            <Text style={styles.operatorButtons}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onOperatorClick('-')}>
            <Text style={styles.operatorButtons}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onOperatorClick('+')}>
            <Text style={styles.operatorButtons}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: 'grey',
    flex: 3,
  },
  operator: {
    backgroundColor: '#836fff',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calculationtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  resulttext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: 30,
  },
  operatorButtons: {
    color: 'white',
    fontSize: 30,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'orange',
    height: 70,
    width: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
