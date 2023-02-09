import React, {useState, useEffect} from 'react';
import {Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import {Card} from 'react-native-elements';

const styles = StyleSheet.create({
  logo_card: {
    justifyContent: "center",
    alignItems: 'center',
    width: 400,
    height:500
  },
  logo_image: {
    justifyContent: "center",
    alignItems: "center",
    width: 270,
    height: 150
  },
});

export default function Welcome(){
  
  return(
      <View>
        <Card containerStyle={styles.logo_card}>
          <Card.Title> FishTech Logo </Card.Title>
          <Card.Image> 
            <Image source={require( './assets/logo_fishtech.jpeg')}
            containerStyle={styles.logo_image}
            />
          </Card.Image>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            Welcome to FishTech App!
            This is a place for instructions!
          </Text>
        </Card>
      </View>
  );
}
