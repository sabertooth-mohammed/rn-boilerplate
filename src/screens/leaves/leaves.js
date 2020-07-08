import React from 'react';
import { SafeAreaView,FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container } from 'src/components';
import global from 'src/components/global.style';
import { NotificationCard } from 'src/components';


let Data = [
    { id: "1", color: 'red', title: "English", description: "Read Julius Caesar Act 1, Scene 2 Read Julius Caesar Act 1, Scene 2 " },
    { id: "2", color: 'green', title: "Marathi", description: "Read Julius Caesar Act 1, Scene 2 " },
    { id: "3", color: 'orange', title: "Hindi", description: "Read Julius Caesar Act 1, Scene 2 " }
];
export default function Leaves(props) {
    return (
        <SafeAreaView style={[global.safearea, { backgroundColor: '#fafafa' }]}>
            <Container style={{ width: wp('90%') }}>
                <FlatList
                    contentContainerStyle={{padding:2}}
                    data={Data}
                    renderItem={({ item }) => <NotificationCard color={item.color} title={item.title} description={item.description} />}
                    keyExtractor={item => item.id}
                />
            </Container>
        </SafeAreaView>
    )
}
