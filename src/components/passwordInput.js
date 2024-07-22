import React, {useState} from 'react';
import {Image} from 'react-native';
import {FormControl, IconButton, Input} from 'native-base';

import {LoginScreenImg} from '../asserts/images/image';

const PasswordInput = ({
  value,
  onChangeText,
  label,
  placeholder,
  isInvalid,
  color,
}) => {
  const [show, setShow] = useState(false);
  return (
    <FormControl marginY={2} isInvalid={isInvalid}>
      <FormControl.Label
        mb={2}
        _text={color ? {color} : undefined}
        fontFamily={'Poppins'}
        fontWeight={'400'}
        fontSize={14}>
        {label}
      </FormControl.Label>
      <Input
        value={value}
        onChangeText={text => {
          onChangeText(text);
        }}
        placeholder={placeholder}
        bgColor={'#FFFFFF'}
        _focus={{borderColor: '#FFFFFF'}}
        secureTextEntry={!show}
        fontFamily={'Poppins'}
        letterSpacing={1}
        fontSize={'14px'}
        borderColor={'#FFF'}
        style={!show && value?.length && {fontSize: 14}}
        rightElement={
          <IconButton
            onPress={() => {
              setShow(!show);
            }}
            variant="ghost"
            icon={
              <Image
                source={LoginScreenImg?.eye}
                style={{
                  marginRight: 10,
                  height: 22,
                  width: 22,
                }}
              />
            }
            _pressed={{backgroundColor: '#FFFFFF'}}
          />
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
