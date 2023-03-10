import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Button from '../Button';

const KeyBoard = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState<Number | null>();

  const calculus = secondNumber + '' + operation + '' + firstNumber;
  const a = calculus.substring(0, calculus.length - 1);
  console.log('ahihi', calculus);
  console.log('hihi', a);

  const c = () => {
    const d = calculus.substring(0, calculus.length - 1);
    return d;
  };
  const handleNumberPress = (buttonValue: string) => {
    // if (firstNumber.length < 20) {
     
    // }
    setFirstNumber(firstNumber + buttonValue);
    setResult(null);
  };
  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };
  const handleClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };
  const handleRemember = () => {
    setFirstNumber(result?.toString());
    setResult(null);
  };
  const getResult = () => {
    switch (operation) {
      case '+':
        handleClear();
        setResult(Number(secondNumber) + Number(firstNumber));
        break;
      case '-':
        handleClear();
        setResult(Number(secondNumber) - Number(firstNumber));
        break;
      case 'x':
        handleClear();
        setResult(Number(secondNumber) * Number(firstNumber));
        break;
      case '%':
        handleClear();
        setResult(Number(secondNumber) / Number(firstNumber));
        break;
      case '÷':
        handleClear();
        setResult(Number(secondNumber) / Number(firstNumber));
        break;
      default:
        handleClear();
        setResult(0);
        break;
    }
  };
  //   console.log('s', secondNumber);
  //   console.log('s1', firstNumber);
  //   console.log('s2', result);
  //   console.log('s3', operation);

  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Text style={styles.textGray}>RAD</Text>
        <Image
          style={styles.imgOption}
          source={require('../../assets/three-dots.png')}
        />
      </View>
      <View style={styles.boxResult}>
        {result === null ? (
          <Text style={styles.textResult}>
            {secondNumber}
            {operation}
            {firstNumber}
            {/* {calculus} */}
          </Text>
        ) : (
          <Text style={styles.textResult}>{result?.toString()}</Text>
        )}
      </View>
      <View style={styles.row}>
        <Button isWhite onPress={() => handleClear()}>
          <Text style={styles.textBlue}>C</Text>
        </Button>
        <Button isWhite onPress={() => handleOperationPress('%')}>
          <Text style={styles.textBlue}>％</Text>
        </Button>
        <Button
          isWhite
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}>
          {/* onPress={() => c()}
          > */}
          <Text style={styles.textBlue}>⌫</Text>
        </Button>
        <Button isWhite onPress={() => handleOperationPress('+')}>
          <Text style={styles.textBlue}>+</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button isWhite onPress={() => handleNumberPress('7')}>
          <Text style={styles.textBlack}>7</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('8')}>
          <Text style={styles.textBlack}>8</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('9')}>
          <Text style={styles.textBlack}>9</Text>
        </Button>
        <Button isWhite onPress={() => handleOperationPress('-')}>
          <Text style={styles.textBlue}>-</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button isWhite onPress={() => handleNumberPress('4')}>
          <Text style={styles.textBlack}>4</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('5')}>
          <Text style={styles.textBlack}>5</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('6')}>
          <Text style={styles.textBlack}>6</Text>
        </Button>
        <Button isWhite onPress={() => handleOperationPress('x')}>
          <Text style={styles.textBlue}>x</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button isWhite onPress={() => handleNumberPress('1')}>
          <Text style={styles.textBlack}>1</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('2')}>
          <Text style={styles.textBlack}>2</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('3')}>
          <Text style={styles.textBlack}>3</Text>
        </Button>
        <Button isWhite onPress={() => handleOperationPress('÷')}>
          <Text style={styles.textBlue}>÷</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button isWhite onPress={() => handleRemember()}>
          <Image
            style={styles.imgAns}
            source={require('../../assets/copy.png')}
          />
        </Button>
        <Button isWhite onPress={() => handleNumberPress('0')}>
          <Text style={styles.textBlack}>0</Text>
        </Button>
        <Button isWhite onPress={() => handleNumberPress('.')}>
          <Text style={styles.textBlack}>.</Text>
        </Button>
        <Button isBlue onPress={() => getResult()}>
          <Text style={styles.textWhite}>=</Text>
        </Button>
      </View>
    </View>
  );
};

export default KeyBoard;
