import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import {Card , Title ,Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Slider" component={Slider_Component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safe_are_style}>
    <Welcome/>
    <Button
      title="Slider View"
      onPress={() =>
        navigation.navigate('Slider')
      }
    />
    </SafeAreaView>
  );
};

// based on the selected slider's value => change the sound
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

const soundfiles = {
  sound1: require('./assets/s1.m4a'),
  sound2: require('./assets/s2.m4a'),
  sound3: require('./assets/s3.m4a'),
};

const styles = StyleSheet.create({
  container_slider: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  safe_are_style :{
    flex :1, 
    justifyContent: 'center', 
    marginLeft: 5, 
    marginTop: 50, 
    marginBottom:20, 
    marginRight: 10
  }
 });

const Slider_Component = ({navigation, route}) => {
  const [sound, setSound] = React.useState();
  const [sliderValue, setSliderValue] = useState(15);

  async function playSound(sFile) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( sFile, { shouldPlay: true, isLooping: true });
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();

  }

  async function stopSound(){
    console.log("stopping sound");
    if(sound){
      sound.stopAsync();
    }
  }


  React.useEffect(() => {
        
        console.log("current slider value", sliderValue);
        if(sliderValue==20){
          playSound(soundfiles.sound1);
        }
        else if(sliderValue==50){
          playSound(soundfiles.sound2);
        }
        else if(sliderValue==80){
          playSound(soundfiles.sound3);
        }
  }, [sliderValue]);

  
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return(
    
    <SafeAreaView style={styles.safe_are_style}>
 <View style={styles.container_slider}>
      {/*Text to show slider value*/}
      <Text style={{color: 'black'}}>Value of slider is : {sliderValue}</Text>
      
      {/*Slider with max, min, step and initial value*/}
      <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        step={1}
        value={sliderValue}
        onValueChange={(sliderValue) => setSliderValue(sliderValue)}
      />
    </View>
    
    <Button title="Stop Sound" onPress={() => {stopSound()}} style={{backgroundColor: 'red'}} />
 </SafeAreaView>

);
}

const App = ({navigation, route}) => {
  
  return(
    
      <SafeAreaView style={{flex :1, justifyContent: 'center', marginLeft: 5, marginTop: 50, marginBottom:20, marginRight: 10 }}>
   
      <MyStack></MyStack> 
    
   </SafeAreaView>
  
  )
   
};

export default App;
