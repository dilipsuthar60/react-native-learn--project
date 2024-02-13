import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutScreens = ({route}) => {
    const navigation =useNavigation()
    const {name}=route.params
    return (
        <View style={styles.container}>
            <Text style={{marginBottom:15}}>About us {name}</Text>
            <Button title='back To Home Page' onPress={()=>{
                navigation.navigate("Home")
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default AboutScreens;
