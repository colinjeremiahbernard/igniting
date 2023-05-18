import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-green-950 flex-1 items-center justify-center'>
        <h2 className='text-blue-50 font-bold text-5xl'>Hello There!</h2>  
      <StatusBar style="light" translucent/>
    </View> 
  );
}

