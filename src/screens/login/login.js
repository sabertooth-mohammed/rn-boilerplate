import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, StatusBar } from "react-native";
import { Input, Container, AppButton } from "src/components/index";
import global from 'src/components/global.style';

import styles from "./login.style";

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });

  const onSubmit =()=>{
    props.navigation.navigate('SelectStudent');
  }
  return (
    <SafeAreaView style={global.safearea}>
      <StatusBar barStyle="dark-content"/>
      <View style={{flex:1}}>
        <View style={[global.wrapper]}>
          
          <View style={global.wrapper}>
            <View style={styles.wrapperBackground}>
              <View style={styles.imageWrapper}>
                <Image
                  style={{ width: 130, height: 130, borderRadius: 80 }}
                  resizeMethod="auto"
                  source={require('../../assets/img/logo.png')}
                />
              </View>
            </View>
          </View>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

        </View>

      <Container style={{justifyContent: "space-evenly"}}>
        <Input
          placeholder="Email"
          value={user.email}
          onChangeText={text => setUser({ ...user, email: text })}
        />

        <Input
          placeholder="Password"
          secureTextEntry={true}
          value={user.password}
          onChangeText={text => setUser({ ...user, password: text })}
        />

        <AppButton title="Login" onPress={()=>onSubmit()}/>
      </Container>
      
      <View style={[global.wrapper,global.wrapperCenter]}>
        <Image
          style={{ width:'80%', height:'80%' }}
          resizeMethod="scale"
          source={require('../../assets/img/loginbg.jpg')}
        />
      </View>
      </View>
    </SafeAreaView>
  );
}
