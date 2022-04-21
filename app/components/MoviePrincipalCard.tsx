import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Movie } from '../interfaces/movieInterface';

interface MovieProps {
    movie: Movie;
    height?: number;
    width?: number;
    navigateAction?: () => void;
}

const MoviePrincipalCard = ({ movie, height = 420, width = 300, navigateAction }: MovieProps) => {

    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                ...styles.containerPrincipalCard,
                height,
                width
            }}
            onPress={navigateAction}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: imageURL
                    }}
                    style={styles.principalCard}
                />
            </View>
        </TouchableOpacity>
    )
}

export { MoviePrincipalCard };

const styles = StyleSheet.create({

    containerPrincipalCard: {
        marginHorizontal: 2,
        paddingHorizontal: 5
    },

    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.50,
        elevation: 11,
    },

    principalCard: {
        flex: 1,
        borderRadius: 18,
    }

});