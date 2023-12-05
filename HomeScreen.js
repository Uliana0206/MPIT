import React, {useEffect, useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import {firebase} from '../firebase';


const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState([]);

    const ListingScreen = () => {
        navigation.navigate('ListingScreen')   
    };

    const progressScreen = () => {
        navigation.navigate('progressScreen')   
    };

    useEffect(() => {
        firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data()) 
            }
        else {
            console.log('does not exist')
        }
        })
    }, [])

    return (
        <SafeAreaView>
            <Text>{name.email}</Text>
            <Text style={{fontSize:20, fontWeight:"bold", color:'#3562FF'}}>
                {name.firsName}
            </Text>

            <View>
                <Text onPress={ListingScreen} style={{ textAlign: 'center', fontSize:18 }}>Листинг задач</Text>
            </View>
            <View>
                <Text onPress={progressScreen} style={{ textAlign: 'center', fontSize:18 }}>Достижения</Text>
            </View>
            <TouchableOpacity 
                onPress={() => {firebase.auth().signOut()}}
                >
                    <Text style={{fontSize:22, fontWeight:'bold', textAlign:"center"}}>Выход</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen