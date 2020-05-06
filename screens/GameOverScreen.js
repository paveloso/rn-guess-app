import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>
            <Text>Your number: {props.userNum}</Text>
            <Text>Number of rounds: {props.pcRounds}</Text>
            <MainButton onPress={props.onRestart}>
                <Ionicons name="md-refresh" size={24} color="white"/> NEW GAME
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;