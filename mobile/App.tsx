import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from '@expo-google-fonts/poppins'

import { DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular_Italic } from '@expo-google-fonts/dm-serif-display';

const App: React.FC = () => {

    const fontsLoaded = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular_Italic
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View>
            <Text>
                awe
            </Text>
        </View>
    )
}

export default App
