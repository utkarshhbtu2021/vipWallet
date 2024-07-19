import * as Keychain from 'react-native-keychain';

export async function saveToken(token) {
  try {
    await Keychain.setGenericPassword('token', token, {
      service: 'myAppTokenService' // Optional: You can specify a custom service name
    });
    console.log('Token saved successfully');
  } catch (error) {
    console.error('Error saving token:', error);
  }
}

export async function getToken() {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: 'myAppTokenService' // Optional: Use the same service name as used while saving
    });
    if (credentials) {
      console.log('Token retrieved successfully:', credentials.password);
      return credentials.password; // This is the token
    } else {
      console.log('No token found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
}

export async function deleteToken() {
  try {
    await Keychain.resetGenericPassword({
      service: 'myAppTokenService' // Optional: Use the same service name as used while saving
    });
    console.log('Token deleted successfully');
  } catch (error) {
    console.error('Error deleting token:', error);
  }
}

