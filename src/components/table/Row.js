import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography';

export function Row(props) {
	return (
		<View style={styles.rowWrapper}>
			<View style={styles.row}>
                <Text style={{...material.button}}>{props.title1}</Text>
			</View>
			<View style={styles.row}>
				<Text style={[{...material.button},props.title2Style]}>{props.title2}</Text>
			</View>
			<View style={styles.row}>
			  {props.title3?
			  <Text style={[{...material.button},props.title3Style]}>{props.title3}</Text>
			  :  <TouchableOpacity 
                style={{ backgroundColor: 'orange', borderRadius: 30 }} 
                onPress={() => props.onPress()}>
					<Text style={{ ...material.buttonWhite, padding: 7 }}>Pay Now</Text>
				</TouchableOpacity>}
			</View>
		</View>
	);
}

Row.propTypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
	title3: PropTypes.string,
    onPress: PropTypes.func,
};
Row.defaultProps = {
    title1: 'first',
	title2:'second',
    onPress:()=>alert('Clicked')
};

const styles = StyleSheet.create({
	rowWrapper: {
        height: 50, alignSelf: 'stretch', flexDirection: 'row' 
	},
	row: {flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }
});
