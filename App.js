import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import {Card , Title ,Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

import Welcome from './Welcome';

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
  sound30: require('./assets/sound/30bpm.mp3'),
  sound40: require('./assets/sound/40bpm.mp3'),
  sound50: require('./assets/sound/50bpm.mp3'),
  sound60: require('./assets/sound/60bpm.mp3'),
  sound70: require('./assets/sound/70bpm.mp3'),
  sound80: require('./assets/sound/80bpm.mp3'),
  sound90: require('./assets/sound/90bpm.mp3'),
  sound100: require('./assets/sound/100bpm.mp3'),
  soundmax: require('./assets/sound/maxbpm.mp3'),

};

const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   image: {
     flex: 1,
     justifyContent: "center"
   },
   text: {
     color: "white",
     fontSize: 42,
     lineHeight: 84,
     fontWeight: "bold",
     textAlign: "center",
     backgroundColor: "#000000c0"
   },
   container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  container_slider: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
 });

const App = () => {
  const [sound, setSound] = React.useState();
  const [sliderValue, setSliderValue] = useState(15);

  

  async function playSound(sFile) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( sFile, { shouldPlay: true, isLooping: true });
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopSound() { 
    console.log('Stopping Sound'); 
    sound.stopAsync(); 
  } 

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function stopSound(){
    console.log("stopping sound");
    if(sound){
      sound.stopAsync();
    }
  }


  React.useEffect(() => {
        
        console.log("current slider value", sliderValue);
        if(sliderValue==30){
          playSound(soundfiles.sound30);
        }
        else if(sliderValue==40){
          playSound(soundfiles.sound40);
        }
        else if(sliderValue==50){
          playSound(soundfiles.sound50);
        }
        else if(sliderValue==60){
          playSound(soundfiles.sound60);
        }
        else if(sliderValue==70){
          playSound(soundfiles.sound70);
        }
        else if(sliderValue==80){
          playSound(soundfiles.sound80);
        }
        else if(sliderValue==90){
          playSound(soundfiles.sound90);
        }
        else if(sliderValue==100){
          playSound(soundfiles.sound100);
        }
  }, [sliderValue]);

  return(
  <SafeAreaView style={{flex :1, justifyContent: 'center', marginLeft: 5, marginTop: 50, marginBottom:20, marginRight: 10 }}>
   <View style={styles.container_slider}>
        {/*Text to show slider value*/}
        <Text style={{color: 'black'}}>Value of slider is : {sliderValue}</Text>
        <Welcome></Welcome>
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
  )
   
};

export default App;
