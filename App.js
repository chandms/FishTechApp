import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert,} from 'react-native';
import {Card , Title ,Paragraph } from 'react-native-paper';
import { Audio } from 'expo-av';



const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
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

 const Sound2 = () =>  {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/sample.mp3')
    );
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

  return (
    <View style={styles.container2}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
 

 const buttonClick = () => {
   Alert.alert('Simple Button pressed');
 };

const App = () => (
  <SafeAreaView style={{flex :1, justifyContent: 'center', margin: 25 }}>
   <ScrollView>
      <Card style={{ justifyContent: 'center', margin: 10 }}>
         <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
         <Card.Content>
               <Title>Fish Tech App</Title>
         </Card.Content>
         <Card.Content>
         <Paragraph>Building FishTech App</Paragraph>
         </Card.Content>
         <Image source={require('./assets/fish.png')} />
         {/* <Button
         title="button1"
         onPress={buttonClick}
         /> */}
         <Sound2></Sound2>
         </ImageBackground>
      </Card>
      <Card style={{ justifyContent: 'center', margin: 10 }}>
         <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
         <Card.Content>
               <Title>Fish Tech App</Title>
         </Card.Content>
         <Card.Content>
         <Paragraph>Building FishTech App</Paragraph>
         </Card.Content>
         <Image source={require('./assets/fish.png')} />
         {/* <Button
         title="button2"
         onPress={buttonClick}
         /> */}
         <Sound2></Sound2>
         </ImageBackground>
      </Card>
   </ScrollView>
   </SafeAreaView>
   
);

export default App;

