import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';

const Stack = createNativeStackNavigator();

export function AppStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    )
}
