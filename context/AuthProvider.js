import React, {useState, createContext} from 'react'
import * as SecureStore from '../components/SecureStore';
import axios from '../axios';
import {Platform} from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
            error,
            isLoading,
            login: (email, password) => {
                setIsLoading(true);
                axios.post('login', {
                    email: email,
                    password: password,
                    device_name: Platform.OS === 'ios' ? 'ios' : 'android'
                })
                    .then(response => {
                        const userResponse = {
                            token: response.data.token,
                            id: response.data.user.id,
                            name: response.data.user.name,
                            username: response.data.user.username,
                            avatar: response.data.user.avatar,
                            email: response.data.user.email,
                        }
                        setUser(userResponse);
                        setError(null);
                        SecureStore.secureSave('user', JSON.stringify(userResponse));
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.log(error.response);
                        setError(error.response.data.message);
                        setIsLoading(false);
                    })

            },
            register: (name, userName, email, password, confirmPassword) => {
                setIsLoading(true);
                axios.post('register', {
                    name:name,
                    email: email,
                    userName: userName,
                    password: password,
                    password_confirmation: confirmPassword,
                    device_name: Platform.OS === 'ios' ? 'ios' : 'android'
                })
                    .then(response => {
                        const userResponse = {
                            token: response.data.token,
                            id: response.data.user.id,
                            name: response.data.user.name,
                            username: response.data.user.username,
                            avatar: response.data.user.avatar,
                            email: response.data.user.email,
                        }
                        setUser(userResponse);
                        setError(null);
                        SecureStore.secureSave('user', JSON.stringify(userResponse));
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.log(error.response);
                        setError(error.response.data.message);
                        setIsLoading(false);
                    })

            },
            logout:()=>{
                setIsLoading(true);
                axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
                axios.delete('logout')
                    .then(response => {
                        SecureStore.secureDelete('user');
                        setUser(null);
                        setError(null);
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.log(error.response);
                        setError(error.response.data.message);
                        setIsLoading(false);
                    })
                    .finally(error => {
                        setUser(null);
                        SecureStore.secureDelete('user');
                    })
                setUser(null);

            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}

