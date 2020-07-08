import React from 'react';
import { SafeAreaView,FlatList } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Container } from 'src/components';
import { HeaderRight, HeaderLeft } from 'src/components/Header';
import global from 'src/components/global.style';
import { CircularCard } from 'src/components/CircularCard';

let Data = [
    { id: "1", date: '6 Dec 2019', title: "English", description: "Read Julius Caesar Act 1, Scene 2" },
    { id: "2", date: '15 Dec 2019', title: "Marathi", description: "Read Julius Caesar Act 1, Scene 2 " },
    { id: "3", date: '20 Dec 2019', title: "Hindi", description: "Read Julius Caesar Act 1, Scene 2 " }
];
export default function Circular(props) {
    return (
        <SafeAreaView style={[global.safearea, { backgroundColor: '#fafafa' }]}>
            <Container style={{ width: wp('90%') }}>
                <FlatList
                    contentContainerStyle={{padding:2}}
                    data={Data}
                    renderItem={({ item }) => <CircularCard id={item.id} title={item.title} description={item.description} date={item.date} />}
                    keyExtractor={item => item.id}
                />
            </Container>
        </SafeAreaView>
    )
}

Circular.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'CIRCULAR',
        headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    }
}; 