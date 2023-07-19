import React, {useState, createContext} from 'react'
import {secureSave, secureDelete } from '../components/SecureStore';
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
                            id: response.data.id,
                            name: response.data.name,
                            username: response.data.username,
                            avatar: response.data.avatar,
                            email: response.data.email,
                        }
                        setUser(userResponse);
                        setError(null);
                        secureSave('user', JSON.stringify(userResponse));
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
                        secureDelete('user');
                        setUser(null);
                        setError(null);
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.log(error.response);
                        setError(error.response.data.message);
                        setIsLoading(false);
                    })
                setUser(null);

            }
        }}>
            {children}
        </AuthContext.Provider>
    );
}

