import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert,} from 'react-native';
import {Card , Title ,Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';



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
 });

const App = () => {
  const [sound, setSound] = React.useState();

  async function playSound(sFile) {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( sFile, { shouldPlay: true, isLooping: true });
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return(
  <SafeAreaView style={{flex :1, justifyContent: 'center', marginLeft: 5, marginTop: 50, marginBottom:20, marginRight: 10 }}>
   <ScrollView>
      <Card style={{ justifyContent: 'center', margin: 10 }}>
         <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
         <Card.Content>
               <Title>Sound Sample 1</Title>
         </Card.Content>
         <Card.Content>
         <Paragraph>30 bpm</Paragraph>
         </Card.Content>
         <Image source={require('./assets/fish.png')} />
         <Button title="Play Sound" onPress={() => {playSound(soundfiles.sound1)}} />
         </ImageBackground>
      </Card>
      <Card style={{ justifyContent: 'center', margin: 10 }}>
         <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
         <Card.Content>
               <Title>Sound Sample 2</Title>
         </Card.Content>
         <Card.Content>
         <Paragraph>40 bpm</Paragraph>
         </Card.Content>
         <Image source={require('./assets/fish.png')} />
         <Button title="Play Sound" onPress={() => {playSound(soundfiles.sound2)}} />
         </ImageBackground>
      </Card>
      <Card style={{ justifyContent: 'center', margin: 10 }}>
         <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
         <Card.Content>
               <Title>Sound Sample 3</Title>
         </Card.Content>
         <Card.Content>
         <Paragraph>60 bpm</Paragraph>
         </Card.Content>
         <Image source={require('./assets/fish.png')} />
         <Button title="Play Sound" onPress={() => {playSound(soundfiles.sound3)}} />
         </ImageBackground>
      </Card>
   </ScrollView>
   </SafeAreaView>
  )
   
};

export default App;

