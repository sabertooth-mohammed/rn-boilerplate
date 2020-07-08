import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import PropTypes from 'prop-types';
import { material } from 'react-native-typography'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Image} from "react-native-expo-image-cache";

export function FastImage(props) {
    const preview = { uri: "image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" };
	return (
    <View style={styles.wrapper}>
        <Image style={styles.imageStyle} {...{preview,uri:props.image}} />
        <Text style={{...material.title}}>{props.title}</Text>
    </View>

	);
}

FastImage.propTypes ={
	image:PropTypes.string,
	title: PropTypes.string
}
FastImage.defaultProps  ={
    title:"Event",
}

const styles = StyleSheet.create({
	wrapper:{
		alignItems:'center',marginBottom:20
	},
	imageStyle:{
        height: hp('20%'), width: wp('40%'),borderRadius:10 
	}
});

