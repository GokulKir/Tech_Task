import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Splash from "../pages/Splash";
import LoginScreen from "../pages/authpages/LoginScreen";
import AuthSelection from "../pages/authpages/AuthSelection";
import RegisterScreen from "../pages/authpages/RegisterScreen";
import AuthSucess from "../pages/authpages/AuthSucess";
import Home from "../pages/home/Home";
import MyTabs from "./BottomTab";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Splash"
        component={Splash}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Auth"
        component={AuthSelection}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Register"
        component={RegisterScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Success"
        component={AuthSucess}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 500,
              },
            },
          },
        }}
        name="Home"
        component={MyTabs}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
