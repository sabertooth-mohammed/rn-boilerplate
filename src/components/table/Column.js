import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography';

export function Column(props) {
	return (
		<View style={[styles.columnWrapper,props.style]}>
			<View style={styles.column}>
                <Text style={[{ ...material.title },props.textStyle]}>{props.title1}</Text>
			</View>
			<View style={styles.column}>
                <Text style={[{ ...material.title },props.textStyle,props.title2Style]}>{props.title2}</Text>
			</View>
			<View style={styles.column}>
                <Text style={[{ ...material.titleObject },props.textStyle,props.title3Style]}>{props.title3}</Text>
			</View>
		</View>
	);
}

Column.propTypes = {
	title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
};
Column.defaultProps = {
    title1: 'One',
    title2: 'Two',
    title3: 'Three'
};

const styles = StyleSheet.create({
	columnWrapper: {
		height: 50, backgroundColor: '#ffc600', alignSelf: 'stretch', flexDirection: 'row' 
	},
	column: {
        flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'
	}
});
