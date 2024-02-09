import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function DetailScreen(){
    return (
        <View style={{
            flex:1,
            color:'red',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text>Hello World !</Text>
        <StatusBar style="auto" />
        </View>
    );
}