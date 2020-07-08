import React,{useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

import { Container } from 'src/components';
import global from 'src/components/global.style';

import { TimetableRow } from '../../components/TimetableRow';


export default function Monday(props){
    useEffect(()=>{
        console.log(props.navigation.state.routeName)
    })
    return (
        <SafeAreaView style={[global.safearea, { backgroundColor: '#fafafa' }]}>
            <Container style={{ width: wp('90%') }}>
            
            <TimetableRow name="Maths" time="10:00 am - 11:30 am"/>
            <TimetableRow name="Maths" time="10:00 am - 11:30 am"/>
            <TimetableRow name="Maths" time="10:00 am - 11:30 am"/>
            <TimetableRow name="Maths" time="10:00 am - 11:30 am"/>
              
            </Container>
        </SafeAreaView>
    )
}
