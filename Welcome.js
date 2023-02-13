import React, {useState, useEffect} from 'react';
import {Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import {Card} from 'react-native-elements';

const styles = StyleSheet.create({
  logo_card: {
    justifyContent: "center",
    width: 500,
    height:500
  },
});

export default function Welcome(){
  
  return(
      <View>
        <Card style={styles.logo_card}>
          <Card.Title> FishTech Logo </Card.Title>
          <Card.Image> 
            <Image source={require( './assets/logo_fishtech.jpeg')}
            style={{width:150, height:150}}
            />
          </Card.Image>
        </Card>
      </View>
  );
}
