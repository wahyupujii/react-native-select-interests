import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PickInterest from './screens/PickInterest';
import MyInterest from './screens/MyInterest';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name='PickInterest' component={PickInterest} />
				<Stack.Screen name='MyInterest' component={MyInterest} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
