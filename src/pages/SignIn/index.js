import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignIn = () => {
    return (
        <View>
            <Header title='Sign In' subtitle='Find your best ever meal'/>
            <Gap height={24} backgroundColor={'#e2e2e2'}/>
            <View style={styles.container}>
                <TextInput title='Email' placeholder='Type your email address'/>
                <Gap height={16}/>
                <TextInput title='Password' placeholder='Type your password'/>
                <Gap height={24}/>
                <Button text='Sign In'/>
                <Gap height={12}/>
                <Button text='Create New Account' textColor='white' color='#8D92A3'/>
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
