import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./hooks/Store";
import { LightModeColors, DarkModeColors } from "@/app/styles/Color";
import IconImage from "@/app/components/Icons/IconImage";

//--------------Auth(Stack Navigation Screen)--------------
import Intro from "@/app/page/auth/intro";
import SingIn from "@/app/page/auth/sing-in";
import SingUp from "@/app/page/auth/sing-up";
import ResetPassword from "@/app/page/auth/reset-password";
import VerifyCode from "@/app/page/auth/verify-code";

//--------------(Tab Navigation Screen)-------------------
import Home from "@/app/page/home";
import RotaxCreate from "@/app/page/rotax-create";
import RotaxUser from "@/app/page/rotax-user";
import Settings from "@/app/page/settings";

//--------------(Stack Navigation Screen)-------------------
import RotaxEdit from "@/app/page/rotax-edit";
import RotaxDetails from "@/app/page/rotax-details";
import RotaxMaps from "@/app/page/rotax-maps";
import RotaxShare from "@/app/page/rotax-share";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTab() {
  const { mode } = useSelector((state) => state.settings);
  const [theme, setTheme] = useState(mode === "light" ? LightModeColors : DarkModeColors);

  const TabbackgroundColor = mode === "Dark" ? DarkModeColors.Background : LightModeColors.Background;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.Primary,
        tabBarInactiveTintColor: theme.IconColor,
        tabBarStyle: {
          backgroundColor: TabbackgroundColor,
          height: 80,
          paddingTop: 10,
          paddingBottom: 5,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconImage icon={focused ? "homeActive" : "homePassive"} theme={"TabBar"} />
          ),
        }}
      />
      <Tab.Screen
        name="RotaxCreate"
        component={RotaxCreate}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconImage icon={focused ? "mapActive" : "mapPassive"} theme={"TabBar"} />
          ),
        }}
      />
      <Tab.Screen
        name="RotaxUser"
        component={RotaxUser}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconImage icon={focused ? "tabActive" : "tabPassive"} theme={"TabBar"} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconImage icon={focused ? "settingsActive" : "settingsPassive"} theme={"TabBar"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="singin" component={SingIn} />
      <Stack.Screen name="singup" component={SingUp} />
      <Stack.Screen name="resetpassword" component={ResetPassword} />
      <Stack.Screen name="verifycode" component={VerifyCode} />
    </Stack.Navigator>
  );
}

function RotaxStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="rotaxedit" component={RotaxEdit} />
      <Stack.Screen name="rotaxmaps" component={RotaxMaps} />
      <Stack.Screen name="rotaxdetails" component={RotaxDetails} />
      <Stack.Screen name="rotaxshare" component={RotaxShare} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={MainTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RotaxStack"
            component={RotaxStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
