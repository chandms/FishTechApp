
import React, {useState, useEffect} from 'react';
import { Image, View, ScrollView, Text, ImageBackground, StyleSheet, SafeAreaView, Button, Alert,} from 'react-native';
// Make this a button
// clicking on the button -> display something
// clicking again on the button -> displays stop
// keep on clicking , the above two will happen
export default function example(props){
    return (
        <Button
        title="Sound"
        onPress{() => 
        />
        <Text>{props.title}</Text>
    );
}

async function stopSound() {
    console.log('Stopping Sound');
    sound.stopAsync();
  }
  <Button title="Stop Sound" onPress={() => {stopSound()}} /> 