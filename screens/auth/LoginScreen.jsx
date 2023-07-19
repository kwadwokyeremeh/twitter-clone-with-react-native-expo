import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ActivityIndicator, Image} from "react-native";
import styles from "../../css/styleSheet";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isLoading, login } = useContext(AuthContext);
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
                        secureTextEntry={true}
                        autoCapitalize="none"/>
                </View>
                <TouchableOpacity
                    onPress={()=> login(email,password)}
                    style={[styles.authButton, styles.mt5]}
                    disabled={isLoading}>
                    {isLoading && (<ActivityIndicator style={{marginRight:18}} color='white' size='small'/> )}
                    <Text style={styles.authButtonText}> Login</Text>

                </TouchableOpacity>


                    <TouchableOpacity onPress={()=> navigation.navigate('Register Screen')}
                        style={styles.authLinkContainer}>
                        <Text style={styles.authText}>Don't have account,</Text><Text style={styles.authTextLink}> Register</Text>
                    </TouchableOpacity>

        </View>
        </View>
    )
}
