import React from 'react';
import { ImageBackground } from 'react-native';

export function Background(props) {
    return (
            <ImageBackground
                source={require('src/assets/img/bg.jpg')}
                style={{ width: '100%', height: '100%' }}>
                {props.children}
            </ImageBackground>
    );
}

