import React from 'react'
import { View, Text } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Text onPress={() => console.log('Hello world')}>HomeScreen</Text>
        </View>
    )
}
