import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Questions from '../screens/Questions';
import Result from '../screens/Result';



const AppNavigator = createStackNavigator({

  
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Questions: {
    screen: Questions,
    navigationOptions: {
      header: null
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      header: null
    }
  },
},{
  initialRouteName:'Splash'
}
 
);




export default createAppContainer(AppNavigator);