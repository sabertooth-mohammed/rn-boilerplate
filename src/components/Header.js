import React from 'react';
import {TouchableOpacity,View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function HeaderLeft(props){
    return(
        <TouchableOpacity onPress={()=>props.onPress()}>
         <MaterialIcons 
            style={{paddingLeft:10}} 
            name={props.home?"menu":"arrow-back"} size={32} color="white" 
         />
        </TouchableOpacity>
    )
}

export function HeaderRight(props){
    return(
        <TouchableOpacity onPress={()=>props.onPress()} >
           <View style={{paddingRight:20}}>
            <View style={{backgroundColor:'grey',width:40,height:40,borderRadius:25}}></View>
           </View>
        </TouchableOpacity>
    )
}