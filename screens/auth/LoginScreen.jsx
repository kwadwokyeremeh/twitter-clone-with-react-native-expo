import { View , Text, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import styleSheet from "../../css/styleSheet";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


export default function LoginScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    return (
        <View style={[styleSheet.container,styleSheet.centerItems]}>
            <Text> Login </Text>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Enter your Email Address"
                placeholderTextColor='gray'
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"/>

            <TextInput 
                onChangeText={setPassword}
                value={password}
                placeholder="Enter your Password"
                placeholderTextColor='gray'
                textContentType="password"
                keyboardType="email-address"
                secureTextEntry={true}
                autoCapitalize="none"/>
            <Button onPress={()=> login(email,password)} title="Login"/>

            <TouchableOpacity onPress={()=> navigation.navigate('Register Screen')} >
                <Text>Don't have account, click here to register</Text>
            </TouchableOpacity>
        </View>
    )
}

