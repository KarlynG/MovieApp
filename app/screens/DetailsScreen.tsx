import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigations/Navigations';
import { StackScreenProps } from '@react-navigation/stack';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetailsInfo from '../components/MovieDetailsInfo';

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'details'> { }

const screenHeight = Dimensions.get('screen').height;

const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {

    const { id, original_title, title, poster_path } = route.params;
    const { isLoading, movieDetails, movieCast } = useMovieDetails(id);

    const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>
            </View>

            <View style={styles.informationContainer}>
                <Text style={styles.subTitle}>{original_title}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator size={35} color='#FF4C29' />
            ) : (
                <MovieDetailsInfo movieDetails={movieDetails!} cast={movieCast!} />
            )}

            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.5}
                >
                    <Icon
                        color='white'
                        name='arrow-back-circle-outline'
                        size={50}
                    />
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({

    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.50,
        elevation: 11,
        borderBottomEndRadius: 35,
        borderBottomStartRadius: 35,
    },

    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 35,
        borderBottomStartRadius: 35,
    },

    posterImage: {
        flex: 1,
    },

    informationContainer: {
        marginHorizontal: 20,
        marginTop: 20,

    },

    subTitle: {
        fontSize: 16,
        opacity: 0.7
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    backButton: {
        position: 'absolute',
        elevation: 15,
        top: 10,
        left: 10
    }

});
