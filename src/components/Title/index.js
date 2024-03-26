import React, { useState} from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Title = () => {
    const [stateText, setText] =  useState('');

    const onTextPress = () =>{
        setText('Update state');
    };

    return (
        <Text onPress={onTextPress} >{stateText}</Text>
    );
}

Title.defaultProps ={
    text: 'Default Text'
};

export default React.memo(Title);