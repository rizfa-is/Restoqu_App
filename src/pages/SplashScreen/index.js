import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Logo } from "../../assets"
import { Gap } from "../../components/atoms"

const SplashScreen = () => {
    return <View style={styles.container}>
        <Logo/>
        <Gap height={38}/>
        <Text style={styles.text}>Shopping App</Text>
    </View>
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        color: '#020202',
        fontFamily: 'Poppins-Medium'
    }
})