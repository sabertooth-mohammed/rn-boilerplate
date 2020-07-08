import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export function Input(props) {
	return (
		<TextInput
			placeholder={props.placeholder}
			keyboardType={props.keyboardType}
			clearButtonMode="while-editing"
			enablesReturnKeyAutomatically={true}
            style={[styles.textInput,props.style]}
            secureTextEntry={props.secureTextEntry}
            maxLength={props.maxLength}
            onChangeText={text =>props.onChangeText(text)}
            value={props.value}
		/>
	);
}
Input.propTypes ={
    placeholder:PropTypes.string,
    keyboardType:PropTypes.string,
    secureTextEntry:PropTypes.bool,
    maxLength:PropTypes.number,
    value:PropTypes.string.isRequired,
    onChangeText:PropTypes.func.isRequired,
}
Input.defaultProps ={
    placeholder:"Enter Value",
    keyboardType:"default",  
    secureTextEntry:false,
    maxLength:20,
}
const styles = StyleSheet.create({
	textInput: {
		left: 0,
		height: 50,
		right: 0,
		borderRadius: 40,
		paddingLeft: 30,
        borderColor: '#CFD4D0',
		borderWidth: 1
	}
});