import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography'
import { FontAwesome } from '@expo/vector-icons';

export function TimetableRow(props) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.innerWrapper}>
                <Text style={styles.title}>{props.name}</Text>
                <View style={styles.rightContent}>
                    <FontAwesome name="clock-o" size={18} />
                    <Text style={{ ...material.subheading, marginLeft: 10 }}>{props.time}</Text>
                </View>

            </View>
        </View>
    );
}

TimetableRow.propTypes = {
    name: PropTypes.string,
    time: PropTypes.string
}
TimetableRow.defaultProps = {
    name: "TEST",
    time: "00:00 - 00:00"
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white', elevation: 3, padding: 20,marginBottom:10
    },
    innerWrapper: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    title: {
        ...material.subheading,
    },
    subheading: {
        ...material.body1,
        textAlign: 'center'
    },
    rightContent: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }
});