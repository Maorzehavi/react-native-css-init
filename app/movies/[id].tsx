import {View, Text} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const MovieDetails = () => {
    const {movieId} = useLocalSearchParams()
    return (
        <View>
            <Text>MovieDetails</Text>
        </View>
    )
}
    export default MovieDetails
