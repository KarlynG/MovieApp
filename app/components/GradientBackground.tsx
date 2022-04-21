import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {

    const { colors, previousColors, setPreviousMainColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPreviousMainColors(colors)
            fadeOut()
        })
    }, [colors])

    return (
        <View style={styles.gradientContainer}>

            <LinearGradient
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.6, y: 0.7 }}
                style={{ ...StyleSheet.absoluteFillObject }}
                colors={[
                    previousColors.primary, previousColors.secondary, 'white'
                ]}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.6, y: 0.7 }}
                    colors={[
                        colors.primary, colors.secondary, 'white'
                    ]}
                />

            </Animated.View>

            {children}
        </View>
    )
}

export default GradientBackground;

const styles = StyleSheet.create({

    gradientContainer: {
        flex: 1,
    }

});