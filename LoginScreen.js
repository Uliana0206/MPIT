import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {firebase} from "../firebase";


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    loginUser = async (email,password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
        } catch (error){
            alert(error)
        }
    }

    return (
        <View>
            <Text style={{fontWeight:'bold', fontSize:26, color: '#3562FF', textAlign: "center"}}>
                Вход
            </Text>
            <View style={{marginTop:40}}>
                <TextInput
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    placeholder="Пароль"
                    onChangeText={(password) => setPassword(password)}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity 
                onPress={() => loginUser(email,password)}
            >
                <Text>
                    Войти
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
