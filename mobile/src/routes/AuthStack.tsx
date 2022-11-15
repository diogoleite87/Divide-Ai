import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';

const Stack = createNativeStackNavigator();

export function AuthStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}
