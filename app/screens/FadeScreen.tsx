import React from 'react';
import { View, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

//* This screen is for only test
const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    borderRadius: 5,
                    marginBottom: 20,
                    opacity
                }}
            />

            <Button
                title='Fade In'
                onPress={() => fadeIn}
            />

            <Button
                title='Fade Out'
                onPress={fadeOut}
            />
        </View>
    )
}

export default FadeScreen;
