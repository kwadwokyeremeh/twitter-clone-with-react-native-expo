import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styleSheet from "../../css/styleSheet";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


export default function RegisterScreen({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    return (
        <View style={[styleSheet.container,styleSheet.centerItems]}>
            <Text> Register </Text>
            <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Enter your Full Name"
                placeholderTextColor='gray'
                textContentType="name"
                autoCapitalize="words"/>
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
            <Button onPress={()=> login(email,password)} title="Register"/>

            <TouchableOpacity onPress={()=> navigation.navigate('Login Screen')} >
                <Text>Already have account, click here to sign in</Text>
            </TouchableOpacity>
        </View>
    )
}