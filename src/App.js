import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './components/Login/Login'
import RegisterScreen from './components/Register/Register'

const RootStack = createStackNavigator(
  {  
    Login: LoginScreen,
    Register: RegisterScreen,
    
  },
  {
    initialRouteName: 'Login',
  },
  
);

export default createAppContainer(RootStack);


