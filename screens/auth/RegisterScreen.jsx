import {View, Text, TextInput, Button, TouchableOpacity, Image, ActivityIndicator, StyleSheet} from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import styles from "../../css/styleSheet";


export default function RegisterScreen({navigation}){
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { error, isLoading, register } = useContext(AuthContext);
    return (
        <View style={[styles.authContainer,styles.centerItems]}>
            <View style={{marginTop: 130, width: 260}}>
                <View style={{alignItems:'center'}}>
                    <Image source={require('../../assets/favicon.png')} style={styles.logo}/>
                </View>
                <View style={{marginTop:40}}>
                    {error && <Text style={{color:'red'}}>{error}</Text>}
                    <TextInput
                        style={[styles.inputBox, styles.mt4]}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your Full Name"
                        placeholderTextColor='gray'
                        textContentType="name"
                        autoCapitalize="words"/>
                    <TextInput
                        style={[styles.inputBox, styles.mt4]}
                        onChangeText={setUserName}
                        value={userName}
                        placeholder="Enter your user Name"
                        placeholderTextColor='gray'
                        textContentType="name"
                        autoCapitalize="words"/>
                    <TextInput
                        style={[styles.inputBox, styles.mt4]}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your Email Address"
                        placeholderTextColor='gray'
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"/>

                    <TextInput
                        style={[styles.inputBox, styles.mt4]}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Enter your Password"
                        placeholderTextColor='gray'
                        textContentType="password"
                        keyboardType="visible-password"
                        secureTextEntry={true}
                        autoCapitalize="none"/>
                    <TextInput
                        style={[styles.inputBox, styles.mt4]}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        placeholderTextColor='gray'
                        textContentType="password"
                        keyboardType="visible-password"
                        secureTextEntry={true}
                        autoCapitalize="none"/>
                </View>
                <TouchableOpacity
                    onPress={()=> register(name, userName, email, password, confirmPassword)}
                    style={[styles.authButton, styles.mt5]}
                    disabled={isLoading}>
                    {isLoading && (<ActivityIndicator style={{marginRight:18}} color='white' size='small'/> )}
                    <Text style={styles.authButtonText}> Register</Text>

                </TouchableOpacity>


                <TouchableOpacity onPress={()=> navigation.navigate('Register Screen')}
                                  style={styles.authLinkContainer}>
                    <Text style={styles.authText}>Already have account,</Text><Text style={styles.authTextLink}> Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
