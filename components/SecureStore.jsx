import * as SecureStore from 'expo-secure-store';

export async function secureSave(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      alert("🔐 Here's your value 🔐 \n" + result);
    } else {
      alert('No values stored under that key.');
    }
  }

export async function secureDelete(key) {
    await SecureStore.deleteItemAsync(key);
  }