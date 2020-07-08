import React from 'react';
import { SafeAreaView,FlatList,View,Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container } from 'src/components';
import { HeaderRight, HeaderLeft } from 'src/components/Header';
import global from 'src/components/global.style';
import { NotificationCard } from 'src/components';

let Data = [
    { id: "1", new: true, name: "Alert", description: "Read Julius Caesar Act Scene " },
    { id: "2", new: false, name: "Event news", description: "Read Julius Caesar Act  Scene " },
    { id: "3", new: true, name: "Hindi paathashala", description: "Read Julius Caesar Act  Scene " }
];
export default function Notification(props) {
    return (
        <SafeAreaView style={[global.safearea, { backgroundColor: '#fafafa' }]}>
            <Container style={{ width: wp('90%') }}>
                <FlatList
                    contentContainerStyle={{padding:2}}
                    data={Data}
                    renderItem={({ item }) => <NotificationCard 
                    id={item.id} 
                    name={item.name} 
                    description={item.description} 
                    new={item.new} />}
                    keyExtractor={item => item.id}
                />
                
            </Container>
        </SafeAreaView>
    )
}

Notification.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'NOTIFICATION',
        headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    }
}; 