import React from 'react';
import { SafeAreaView,View,FlatList,Text } from 'react-native';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

import { Container } from 'src/components';
import { HeaderRight, HeaderLeft } from 'src/components/Header';
import global from 'src/components/global.style';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { HomeworkCard } from 'src/components/HomeworkCard';
import { material } from 'react-native-typography';


let Data = [
    { id: "1", color: 'red', title: "JAN 1", description: "New Year" },
    { id: "2", color: 'green', title: "JAN 1", description: "New Year 2020 " },
];
export default class Holiday extends React.Component{
    state = {
        dateSelected: ''
    };
    render(){
    return (
        <SafeAreaView style={[global.safearea, { backgroundColor: '#fafafa' }]}>
            <Container style={{ width: wp('90%') }}>
           
                <Calendar
                    current={Date()}
                    onDayPress={(day) => {
                        this.setState({dateSelected:{[day.dateString]:{selected: true, selectedColor: '#466A8F'}}})
                    }}
                    style={{elevation:3,backgroundColor:'white'}}
                    markedDates={this.state.dateSelected}
                    theme={{todayTextColor:'green',backgroundColor:'grey'}}
                />
                <View style={{backgroundColor:"orange",height:60,marginTop:20,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',...material.titleWhite}}>Holidays</Text>
                </View>
                <View style={{flex:1,marginTop:20}}>
                    <FlatList
                        contentContainerStyle={{padding:2}}
                        data={Data}
                        renderItem={({ item }) => <HomeworkCard 
                        color={item.color} 
                        title={item.title} 
                        description={item.description} />}
                        keyExtractor={item => item.id}
                    />
                </View>

            </Container>
        </SafeAreaView>
    )
}
}

Holiday.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'HOLIDAY',
        headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    }
}; 