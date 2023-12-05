import { View, Text } from 'react-native';
import React from 'react';

export default function Hi({ navigation }) {
    const loadScenereg = () => {
        navigation.navigate('Registration');
    }
    const loadSceneVhod = () => {
        navigation.navigate('Login')
    }

    return (

      <View>
        <View>
            <Text onPress={loadSceneVhod}>Войти</Text>
        </View>
        <View>
            <Text onPress={loadScenereg}>Зарегистрироваться</Text>
        </View>
    </View>
    );
}