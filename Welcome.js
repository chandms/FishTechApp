import React, {useState, useEffect} from 'react';
import {Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import {Card} from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    justifyContent: 'center',
    width: 270,
    height: 270,
    marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto'
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo_fishtech.jpeg')}
      />
      
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
