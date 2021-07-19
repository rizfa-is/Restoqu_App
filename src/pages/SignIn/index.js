import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignIn = () => {
    return (
        <View>
            <Header title='Sign In' subtitle='Find your best ever meal'/>
            <Gap height={24} backgroundColor={'#e2e2e2'}/>
            <View style={styles.container}>
                <TextInput/>
                <TextInput/>
                <Button/>
                <Button/>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container:  {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 26
    },
})
