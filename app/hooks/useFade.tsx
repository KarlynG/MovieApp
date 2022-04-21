import { useRef } from 'react';
import { Animated } from 'react-native';

const useFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = (callBack?: Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 700,
                useNativeDriver: true
            }
        ).start( () => callBack ? callBack() : null);
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 700,
                useNativeDriver: true
            }
        ).start();
    }

    return {
        fadeIn,
        fadeOut,
        opacity,
    }
}

export default useFade;
