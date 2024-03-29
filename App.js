import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet,  SafeAreaView, Button, Alert, Pressable } from 'react-native';
import {Card , Title ,Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';

const Stack = createNativeStackNavigator();


const image = require('./assets/water.jpg');



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
      title="Please select your fishing conditions"
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
    sound30: require('./assets/30bpm.m4a'),
    sound40: require('./assets/40bpm.m4a'),
    sound50: require('./assets/50bpm.m4a'),
    sound60: require('./assets/60bpm.m4a'),
    sound70: require('./assets/70bpm.m4a'),
    sound80: require('./assets/80bpm.m4a'),
    sound90: require('./assets/90bpm.m4a'),
    sound100: require('./assets/100bpm.m4a'),
    soundmax: require('./assets/maxbpm.m4a'),
  
  };

const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    justifyContent: 'center',
  },
  container_slider: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    
  },
  safe_are_style :{
    flex :1, 
    justifyContent: 'center', 
    marginLeft: 5, 
    marginTop: 10, 
    marginBottom:20, 
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 10,
    elevation: 3,
    height: 100,
  },
  stop_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 10,
    elevation: 3,
    height: 40,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
 });

const Slider_Component = ({navigation, route}) => {
  const [sound, setSound] = React.useState();
  const [sliderValue, setSliderValue] = useState(15);
  const [fileSelected, setFileSelected] = React.useState('');

  function ButtonsOpt(props) {
    const { onPress, title = 'Save', sound_file, button_color_style } = props;
  
    return (
      <Pressable style={[styles.button, {backgroundColor:button_color_style}]} onPress={()=>playSound(sound_file)}>
        <Text style={styles.text}>{title}</Text>
        
      </Pressable>
    );
  }

  async function playSound(sFile) {

    
    const { sound } = await Audio.Sound.createAsync( sFile, { shouldPlay: true, isLooping: true });
    setSound(sound);
    setFileSelected(sFile);

    await sound.playAsync();
    console.log('Playing Sound '+ sFile);

  }

  async function stopSound(){
    console.log("stopping sound "+fileSelected);
    if(sound){
      sound.stopAsync();
    }
  }

  
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound '+fileSelected);
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return(
    
    <SafeAreaView style={styles.safe_are_style}>
      <ScrollView>
      <ImageBackground source={image} resizeMode="cover" style={styles.background_image}>
        <View style={styles.container_slider}>
              <ButtonsOpt title="Water Temperature <50     Water Depth < 30"sound_file={soundfiles.sound1} button_color_style='#82bfee' />
              <ButtonsOpt title="Water Depth < 30'" sound_file={soundfiles.sound30} button_color_style='#61a1e9'/>
              <ButtonsOpt title="Water Depth 30' - 40'" sound_file={soundfiles.sound40} button_color_style='#2b83c6'/>
              <ButtonsOpt title="Water Depth 40' - 50'" sound_file={soundfiles.sound50} button_color_style='#1c6ab5'/>
              <ButtonsOpt title="Water Depth 50' - 60'" sound_file={soundfiles.sound60} button_color_style='#113e9c'/>
              <ButtonsOpt title="Water Depth > 60'" sound_file={soundfiles.sound70} button_color_style='#0b4071'/>
          </View>
  
      <Pressable style={[styles.stop_button, {backgroundColor:'red'}]}  onPress={() => {stopSound()}}>
        <Text style={styles.text}>{"Stop Sound"}</Text>
      </Pressable>
      </ImageBackground>
    </ScrollView>

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