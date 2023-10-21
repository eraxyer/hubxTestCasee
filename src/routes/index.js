import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import { OnBoarding, Paywell, Welcome } from '../screens';

const Stack = createNativeStackNavigator();
const screenOptions = {
    gestureEnabled: true,
    headerShown: false,
    gestureDirection: 'vertical',
    animation: 'slide_from_right',
  };

const StackNavigation = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen options={screenOptions} name="Welcome" component={Welcome} />
                <Stack.Screen options={screenOptions} name="OnBoarding" component={OnBoarding} />
                <Stack.Screen options={screenOptions} name="Paywell" component={Paywell} />
                <Stack.Screen options={screenOptions} name="Home" >{(props) => <Tabs {...props}  />}</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;