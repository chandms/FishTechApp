import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Dimensions, Text, ImageBackground, StyleSheet,  SafeAreaView, Button, Alert, Pressable } from 'react-native';
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginTop: 10,
    elevation: 3,
    backgroundColor: '#7b68ee',
    height: 100,
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
    const { onPress, title = 'Save', sound_file } = props;
    return (
      <Pressable style={styles.button} onPress={()=>playSound(sound_file)}>
        <Text style={styles.text}>{title}</Text>
        
      </Pressable>
    );
  }

  async function playSound(sFile) {
    console.log('Playing Sound '+ sFile);
    const { sound } = await Audio.Sound.createAsync( sFile, { shouldPlay: true, isLooping: true });
    setSound(sound);
    setFileSelected(sFile);

    await sound.playAsync();

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
 <View style={styles.container_slider}>
    
      <ButtonsOpt title="Water Temperature <50     Water Depth < 30" sound_file={soundfiles.sound1}/>
      <ButtonsOpt title="Water Depth < 30'" sound_file={soundfiles.sound30}/>
      <ButtonsOpt title="Water Depth 30' - 40'" sound_file={soundfiles.sound40}/>
      <ButtonsOpt title="Water Depth 40' - 50'" sound_file={soundfiles.sound50}/>
      <ButtonsOpt title="Water Depth 50' - 60'" sound_file={soundfiles.sound60}/>
      <ButtonsOpt title="Water Depth > 60'" sound_file={soundfiles.sound70}/>
    </View>
    
    <Button title="Stop Sound" onPress={() => {stopSound()}} style={{backgroundColor: 'red'}} />
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