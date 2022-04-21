import React, { useContext, useEffect } from 'react';
import { ScrollView, Dimensions, Text, View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/helpers';
import { RootStackParams } from '../navigations/Navigations';
import { useMovies } from '../hooks/useMovies';
import { MoviePrincipalCard } from '../components/MoviePrincipalCard';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

interface HomeScreenProps extends StackScreenProps<RootStackParams, 'home'> { };

const HomeScreen = ({ navigation }: HomeScreenProps) => {

    const { colors } = useContext(GradientContext);
    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext);

    const getCurrentColorsPoster = async (index: number) => {
        const movie = nowPlaying[index];
        const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

        const { primary = '#082032', secondary = '#334756' } = await getImageColors(imageURL);

        setMainColors({ primary, secondary })
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getCurrentColorsPoster(0);
        }
    }, [nowPlaying])

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator color='#FF4C29' size={120} />
                <Text style={styles.loadingText}>Cargando Películas...</Text>
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
                <View style={{ marginTop: top + 20 }}>
                    {/* cAROUSEL PRINCIPAL */}
                    <View style={{ height: 440 }}>
                        <Carousel                            
                            data={nowPlaying}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.8}
                            loop={true}
                            onSnapToItem={index => getCurrentColorsPoster(index)}
                            renderItem={
                                ({ item }) => (
                                    <MoviePrincipalCard
                                        movie={item}
                                        navigateAction={() => navigation.navigate('details', item)}
                                    />
                                )
                            }
                        />
                    </View>

                    {/* MOVIES POPULAR, TOP RATED, COMMING SOON */}
                    <HorizontalSlider movies={popular} title='Populares' navigation={navigation} />
                    <HorizontalSlider movies={topRated} title='Mejor Valoradas' navigation={navigation} />
                    <HorizontalSlider movies={upcoming} title='Próximamente' navigation={navigation} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

    loadingContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C394B'
    },

    loadingText: {
        textAlign: 'center',
        marginTop: 35,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }

});