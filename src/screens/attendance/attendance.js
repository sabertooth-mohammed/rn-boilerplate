import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container } from 'src/components';
import { HeaderRight } from 'src/components/Header';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { material } from 'react-native-typography';

import { Column } from 'src/components/table/Column';
import { Row } from 'src/components/table/Row';

export default function Attendance(props) {
    const [states, useExams] = useState({ attendance: false })
    return (
        <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
            <View style={{ backgroundColor: 'skyblue', height: hp('15%'), }}>
                <Container style={{ width: wp('80%'), justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 70, height: 70 }}
                            source={require('../../assets/img/logo.png')} />
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ ...material.headline }}>Sudhir Sam</Text>
                            <Text style={{ ...material.subheading }}>STD: 1 A </Text>
                        </View>
                    </View>
                </Container>
            </View>
            <Container style={{ width: wp('90%') }}>

                <ScrollView contentContainerStyle={{ padding: 4 }}>
                    <View style={{ backgroundColor: 'white', elevation: 3, marginTop: 10 }}>
                        <TouchableHighlight
                            style={{ backgroundColor: 'orange', padding: 10 }}
                            onPress={() => useExams({ ...states, attendance: !states.attendance })}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...material.subheadingWhite }}>Session - 2019-2020</Text>
                                {states.attendance ?
                                    <Text style={{ fontSize: 22, color: 'white' }}>-</Text> :
                                    <Text style={{ fontSize: 22, color: 'white' }}>+</Text>}
                            </View>
                        </TouchableHighlight>

                        {states.attendance ? <View style={{ padding: 10 }}>
                            <Column title1="Month" title2="Present" title3="Absent"
                                title3Style={{ color: 'red' }}
                                style={{ backgroundColor: 'white' }}
                                textStyle={{ ...material.subheadingObject }}
                                title3Style={{ color: 'red' }} title2Style={{ color: 'green' }}
                            />
                            <View style={{ borderWidth: 0.3, borderColor: 'grey' }} />
                            <Row
                                title1="JUNE" title2="20" title3="2"
                                title3Style={{ color: 'red' }} title2Style={{ color: 'green' }} />
                            <View style={{ borderWidth: 0.3, borderColor: 'grey' }} />
                            <Row title1="JULY" title2="16" title3="6" title3Style={{ color: 'red' }} title2Style={{ color: 'green' }} />
                            <View style={{ borderWidth: 0.3, borderColor: 'grey' }} />
                            <Row title1="AUGUST" title2="12" title3="10" title3Style={{ color: 'red' }} title2Style={{ color: 'green' }} />
                            <View style={{ borderWidth: 0.3, borderColor: 'grey' }} />
                            <Row title1="SEPTEMBER" title2="18" title3="4" title3Style={{ color: 'red' }} title2Style={{ color: 'green' }} />

                        </View> : null}

                    </View>
                </ScrollView>
            </Container>
        </View>
    )
}

Attendance.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'ATTENDANCE',
        headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    }
}; 