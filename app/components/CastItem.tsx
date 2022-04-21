import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface CastItemProps {
    actor: Cast;
}

const CastItem = ({ actor }: CastItemProps) => {

    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <View style={styles.container}>

            {actor.profile_path && (
                <Image
                    source={{ uri }}
                    style={styles.actorImage}
                />
            )}

            <View style={styles.actorInfo}>
                <Text style={styles.actorName}>
                    {actor.name}
                </Text>

                <Text style={styles.characterName}>
                    {actor.character}
                </Text>
            </View>

        </View>
    )
}

export default CastItem;

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.40,
        shadowRadius: 7.50,
        elevation: 14,
        marginLeft: 20,
        paddingRight: 15,
    },

    actorImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },

    actorInfo: {
        marginLeft: 10,
        marginTop: 3,
    },

    actorName: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    characterName: {
        fontSize: 16,
        opacity: 0.7
    }

});