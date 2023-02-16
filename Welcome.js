import React, {useState, useEffect} from 'react';
import {Animated, Platform, Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import {Card} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    justifyContent: 'center',
    width: 270,
    height: 270,
    marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto',
  },
    welcomeText1: {
      fontSize: 30,
      marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto',
      justifyContent: 'center', textAlign: 'center',
      fontStyle: 'bold'
    },
    welcomeText2: {
      fontSize: 20,
      marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto',
      justifyContent: 'center', textAlign: 'center',
      paddingTop: 10
    }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo_fishtech.jpeg')}
      />
      <Text style={styles.welcomeText1}>
        {'\n'}
        {"Welcome to"}
        {'\n'}
        {"Thump'em Up App!"}
      </Text>
      <Text style={styles.welcomeText2}>
      {'\n'}
        Fishing could have never been easier.
        {'\n'}
      </Text>
      <Text style={styles.welcomeText2}>

        Use the mobile thumper and watch fish come to you.
        {'\n'}
      </Text>
    </View>
  );
};

export default DisplayAnImage;








/*const styles = StyleSheet.create({
  logo_card: {
    justifyContent: 'center',
    width: 300,
    height:500
  },
});

export default function Welcome(){
  
  return(
      <View>
        <Card containerStyle={styles.logo_card}>
          <Card.Image> 
            <Image source={require( './assets/logo_fishtech.jpeg')}
            containerStyle={{width:275, height:150}}
            />
          </Card.Image>
        </Card>
      </View>
  );
}*/
