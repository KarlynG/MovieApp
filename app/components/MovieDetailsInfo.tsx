import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieDetails } from '../interfaces/movieInterface';
import CastItem from './CastItem';

interface MovieDetailsInfoProps {
    movieDetails: MovieDetails;
    cast: Cast[]
}

const MovieDetailsInfo = ({ movieDetails, cast }: MovieDetailsInfoProps) => {
    return (
        <View>
            {/** DETAILS */}
            <View style={{ marginHorizontal: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='star-half'
                        color='gold'
                        size={20}
                    />

                    <Text> {movieDetails.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movieDetails.genres.map(genre => genre.name).join(', ')}
                    </Text>

                </View>

                {/** HISTORY */}
                <Text style={styles.title}>Historia</Text>

                <Text style={{ fontSize: 15, }}>{movieDetails.overview}</Text>

                <Text style={styles.budget}>Presupuesto</Text>

                <Text style={{ fontSize: 15, marginTop: 5 }}>
                    USD$ {currencyFormatter.format(movieDetails.budget, { code: 'USD' })}
                </Text>

            </View>

            {/** CASTING */}
            <View style={{ marginTop: 5, marginBottom: 30 }}>
                <Text style={{
                    ...styles.title, marginHorizontal: 20
                }}>Actores</Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 10,
                        height: 70,
                    }}
                />

            </View>
        </View>
    )
}

export default MovieDetailsInfo;

const styles = StyleSheet.create({

    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    },

    budget: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold'
    }

});