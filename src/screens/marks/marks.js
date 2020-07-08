import React, { useState }from 'react';
import { View,Text,ScrollView, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Container } from 'src/components';
import { HeaderRight, HeaderLeft } from 'src/components/Header';

import { TouchableHighlight } from 'react-native-gesture-handler';
import { material } from 'react-native-typography';

import { Column } from 'src/components/table/Column';
import { Row } from 'src/components/table/Row';

export default function Marks(props) {
    const [exams,useExams] = useState({exam1:false,exam2:false,exam3:false,exam4:false,})
    return (
        <View style={{flex:1, backgroundColor: '#fafafa' }}>
             <View style={{backgroundColor:'skyblue',height:hp('15%'),}}>
                 <Container style={{ width: wp('80%'),justifyContent:'center' }}>
                     <View style={{flexDirection: 'row'}}>
                        <Image
                        style={{ width: 70, height: 70}}
                        source={require('../../assets/img/logo.png')}/> 
                        <View style={{paddingLeft:20}}>
                            <Text style={{...material.headline}}>Sudhir Sam</Text>
                            <Text style={{...material.subheading}}>STD: 1 A </Text>
                        </View>
                    </View>
                </Container>
             </View>
            <Container style={{ width: wp('90%') }}>
               
                <ScrollView contentContainerStyle={{padding:4}}>
                    <View style={{backgroundColor:'white',elevation: 3,marginTop:10}}>
                        <TouchableHighlight 
                        style={{backgroundColor:'orange',padding:10}}
                        onPress={()=>useExams({...exams,exam1:!exams.exam1})}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Text style={{...material.subheadingWhite}}>Mid term Exam</Text>
                            {exams.exam1 ?
                            <Text style={{fontSize:22,color:'white'}}>-</Text>:
                            <Text style={{fontSize:22,color:'white'}}>+</Text>}
                            </View>
                        </TouchableHighlight>

                        {exams.exam1 ?  <View style={{padding:10}}>
                            <Column title1="Subject" title2="Max Marks" title3="Marks" 
                            style={{backgroundColor:'white'}} 
                            textStyle={{...material.subheadingObject}}/>
                             <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Grade" title2="" title3="C+"/>
                        </View>:null}
                    
                    </View>

                    <View style={{backgroundColor:'white',elevation: 3,marginTop:10}}>
                        <TouchableHighlight 
                        style={{backgroundColor:'orange',padding:10}}
                        onPress={()=>useExams({...exams,exam2:!exams.exam2})}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <Text style={{...material.subheadingWhite}}>Mid term Exam</Text>
                            {exams.exam2 ?
                            <Text style={{fontSize:22,color:'white'}}>-</Text>:
                            <Text style={{fontSize:22,color:'white'}}>+</Text>}
                            </View>
                        </TouchableHighlight>

                        {exams.exam2 ?  <View style={{padding:10}}>
                            <Column title1="Subject" title2="Max Marks" title3="Marks" 
                            style={{backgroundColor:'white'}} 
                            textStyle={{...material.subheadingObject}}/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Maths" title2="60" title3="80"/>
                            <View style={{borderWidth:0.3,borderColor:'grey'}}/>
                            <Row title1="Grade" title2="" title3="C+"/>
                        </View>:null}
                    
                    </View>

                </ScrollView>
            </Container>
        </View>
    )
}

Marks.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'MARKS',
        headerRight: <HeaderRight onPress={() => alert('Left ')} />,
    }
}; 