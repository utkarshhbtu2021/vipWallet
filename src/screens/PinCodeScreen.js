import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0];
const initialPin = {a: '', b: '', c: '', d: ''};

const PinCodeScreen = ({navigation}) => {
  const [pin, setPin] = useState({...initialPin});
  const [hidden, setHidden] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const checkIfFirstTime = async () => {
      try {
        const storedPin = await AsyncStorage.getItem('userPin');
        setIsFirstTime(!storedPin);
      } catch (error) {
        console.error('Failed to check PIN:', error);
      }
    };
    checkIfFirstTime();
  }, []);

  const onEnterPin = btn => {
    if (typeof btn === 'number') {
      for (let i = 0; i < Object.keys(pin).length; i += 1) {
        const key = Object.keys(pin)[i];
        if (!pin[key]) {
          const newPin = {...pin};
          newPin[key] = btn.toString();
          setPin(newPin);
          break;
        }
      }
    } else {
      if (btn === 'clear') {
        for (let i = 0; i < Object.keys(pin).length; i += 1) {
          const key = Object.keys(pin).reverse()[i];
          if (pin[key]) {
            const newPin = {...pin};
            newPin[key] = '';
            setPin(newPin);
            break;
          }
        }
      }
      if (btn === 'confirm') {
        const pinValue = Object.keys(pin)
          .map(pinKey => pin[pinKey])
          .filter(x => x)
          .join('');

        if (isFirstTime) {
          if (pinValue.length === Object.keys(pin).length) {
            savePin(pinValue);
          }
        } else {
          verifyPin(pinValue);
        }
      }
    }
  };

  const savePin = async pinValue => {
    try {
      await AsyncStorage.setItem('userPin', pinValue);
      setPin({...initialPin});
      navigation.navigate('NextScreen'); // Redirect to next screen
    } catch (error) {
      console.error('Failed to save PIN:', error);
    }
  };

  const verifyPin = async pinValue => {
    try {
      const storedPin = await AsyncStorage.getItem('userPin');
      if (pinValue === storedPin) {
        setPin({...initialPin});
        navigation.navigate('NextScreen'); // Redirect to next screen
      } else {
        // Handle incorrect PIN scenario here, e.g., show a visual error message
        console.warn('Incorrect PIN');
      }
    } catch (error) {
      console.error('Failed to verify PIN:', error);
    }
  };

  const pinValue = Object.keys(pin)
    .map(pinKey => pin[pinKey])
    .filter(x => x)
    .join('');

  const isPinComplete = pinValue.length === Object.keys(pin).length;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.optContainer}>
          {Object.keys(pin).map(pinKey => (
            <View key={pinKey} style={styles.optSubContainer}>
              {pin[pinKey] ? (
                hidden ? (
                  <View style={styles.pinDot} />
                ) : (
                  <Text style={styles.pin}>{pin[pinKey]}</Text>
                )
              ) : (
                <View style={styles.empty} />
              )}
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={[styles.hideBtn, !pinValue && {opacity: 0.2}]}
          disabled={!pinValue}
          onPress={() => setHidden(!hidden)}>
          <Text>{hidden ? 'SHOW' : 'HIDE'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numberContainer}>
        {data.map(btn => (
          <View key={btn} style={styles.btn}>
            <TouchableNativeFeedback onPress={() => onEnterPin(btn)}>
              <View style={styles.btn1}>
                <Text style={styles.btnTxt}>{btn}</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.confirmBtn, !isPinComplete && {opacity: 0.5}]}
        disabled={!isPinComplete}
        onPress={() => onEnterPin('confirm')}>
        <Text style={styles.confirmBtnTxt}>
          {isFirstTime ? 'CONFIRM' : 'VERIFY'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    width: '33.33%',
    backgroundColor: '#eee',
  },
  btn1: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  btnTxt: {
    fontSize: 30,
  },
  optSubContainer: {
    width: 60,
    height: 40,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinDot: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: '#444',
  },
  pin: {
    fontSize: 20,
  },
  empty: {
    height: 2,
    width: '100%',
    backgroundColor: '#666',
  },
  hideBtn: {
    padding: 20,
  },
  confirmBtn: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtnTxt: {
    fontSize: 20,
    color: '#007bff',
  },
});

export default PinCodeScreen;
