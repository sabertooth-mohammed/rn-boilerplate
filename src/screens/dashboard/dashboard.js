import React from 'react';
import {SafeAreaView,View,StyleSheet} from 'react-native';
import global from 'src/components/global.style';
import { Container } from 'src/components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { HeaderLeft,HeaderRight } from 'src/components/Header';
import { HomeCard } from 'src/components/HomeCard';

export default function Dashboard(props){
   
    return(
        <SafeAreaView style={[global.safearea,{backgroundColor:'#fafafa'}]}>
            <Container style={{width:wp('90%')}}>
                <View style={styles.menuContainer}>
                    
                    <HomeCard title="Attendance" 
                    image={{uri:"https://img.icons8.com/nolan/64/badge.png"}}
                    onPress={()=>props.navigation.navigate('Attendance')}/>

                    <HomeCard title="Homework" 
                    image={{uri:"https://img.icons8.com/nolan/64/puzzle.png"}}
                    onPress={()=>props.navigation.navigate('Homework')}/>
                    
                    <HomeCard title="Circular" 
                    image={{uri:"https://img.icons8.com/nolan/64/mailbox-closed-flag-down.png"}}
                    onPress={()=>props.navigation.navigate('Circular')}/>
                
                    <HomeCard title="Notification" 
                    image={{uri:"https://img.icons8.com/nolan/64/appointment-reminders.png"}}
                    onPress={()=>props.navigation.navigate('Notification')}/>

                    <HomeCard title="Payment" 
                    image={{uri:"https://img.icons8.com/nolan/64/request-money.png"}}
                    onPress={()=>props.navigation.navigate('Payment')}/>

                    <HomeCard title="Holidays" 
                    image={{uri:"https://img.icons8.com/nolan/64/briefcase.png"}}
                    onPress={()=>props.navigation.navigate('Holiday')}/>

                    <HomeCard title="Time Table" 
                    image={{uri:"https://img.icons8.com/nolan/64/planner.png"}}
                    onPress={()=>props.navigation.navigate('Timetable')}/>

                    <HomeCard title="Marks" 
                    image={{uri:"https://img.icons8.com/nolan/64/multi-edit.png"}}
                    onPress={()=>props.navigation.navigate('Marks')}/>

                    <HomeCard title="Leaves" 
                    image={{uri:"https://img.icons8.com/nolan/64/folder-invoices.png"}}
                    onPress={()=>props.navigation.navigate('Leaves')}/>

                    <HomeCard title="Gallery" 
                    image={{uri:'https://img.icons8.com/nolan/64/picture.png'}}
                    onPress={()=>props.navigation.navigate('Gallery')}/>
            
                </View>

            </Container>
        </SafeAreaView>
    );
}
Dashboard.navigationOptions= ({navigation})=>{ 
    return{
        headerTitle:'DASHBOARD',
        headerRight:<HeaderRight onPress={()=>alert('Left ')}/>,
        headerLeft:<HeaderLeft home={true} onPress={()=>navigation.toggleDrawer()}/>,
    }
}; 


const styles = StyleSheet.create({
    menuContainer:{
        flexDirection:'row', 
        justifyContent:'space-between',
        flexWrap:'wrap'
    }
})
