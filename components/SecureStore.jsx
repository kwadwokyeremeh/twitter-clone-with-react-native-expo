import * as SecureStore from 'expo-secure-store';

export async function secureSave(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

export async function getValueFor(key) {
    await SecureStore.getItemAsync(key);
    
  }

export async function secureDelete(key) {
    await SecureStore.deleteItemAsync(key);
  }