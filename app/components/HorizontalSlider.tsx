import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { MoviePrincipalCard } from './MoviePrincipalCard';

interface HorizontalSliderProps {
    title?: string;
    movies: Movie[];
    navigation: any; //* This allow navigate
}

const HorizontalSlider = ({ title, movies, navigation }: HorizontalSliderProps) => {

    return (
        <View style={{ height: (title) ? 280 : 220, }}>
            {title && <Text style={styles.category}>{title}</Text>}
            <FlatList                
                horizontal
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <MoviePrincipalCard
                        movie={item}
                        width={140}
                        height={200}
                        navigateAction={() => navigation.navigate('details', item)}
                    />
                )}
            />
        </View>
    )
}

export default HorizontalSlider;

const styles = StyleSheet.create({

    category: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 15,
    },

});