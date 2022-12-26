import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import StackNavigation from './src/navigation/StackNavigator';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
