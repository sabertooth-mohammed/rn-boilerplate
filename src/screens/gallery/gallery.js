import React,{useState} from 'react';
import { SafeAreaView,View,Picker } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container } from 'src/components';
import { HeaderRight } from 'src/components/Header';
import global from 'src/components/global.style';

import { ScrollView } from 'react-native-gesture-handler';
import { FastImage } from '../../components/FastImage';

export default function Gallery() {

    const [year,useYear] = useState({selectedYear:'Year'})

    return (
        <SafeAreaView style={[global.safearea, { backgroundColor: '#fafafa' }]}>

            <Container style={{ width: wp('90%') }}>
            
            <View style={{borderRadius:20,alignSelf:'center',width: wp('60%'),backgroundColor:'white',elevation:5}}>
                <Picker
                    selectedValue={year.selectedYear}
                    style={{height: 50, width: wp('50%'),alignSelf:'center'}}
                    onValueChange={(itemValue, itemIndex) =>
                        useYear({...year,selectedYear:itemValue})
                    }>
                    <Picker.Item label="Year" value="" />
                    <Picker.Item label="2019" value="2019" />
                    <Picker.Item label="2020" value="2020" />
                </Picker>
            </View>

                <ScrollView contentContainerStyle={{ marginTop:30,flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <FastImage title="Event" image="https://unsplash.it/800/800?image=25" />

                    <FastImage title="Event" image="https://unsplash.it/800/800?image=35" />

                    <FastImage title="Event" image="https://unsplash.it/800/800?image=45" />

                </ScrollView>

            </Container>
        </SafeAreaView>
    )
}

Gallery.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'GALLERY',
        headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    }
}; 