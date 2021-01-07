import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { 
    LoginScreen,
    SplashScreen,
    GetStarted,
    RegisterScreen,
    UploadPhoto,
    Home,
    Messages,
    TaniCenter,
    UserProfile,
} from '../pages';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator, HomeProfile } from '../components/index-components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Messages" component={Messages}/>
        <Tab.Screen name="TaniCenter" component={TaniCenter}/>
    </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen
                name='SplashScreen'
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='GetStarted'
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='UploadPhoto'
                component={UploadPhoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MainApp'
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='Messages'
                component={Messages}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='TaniCenter'
                component={TaniCenter}
                options={{headerShown : false}}
            />
            {/* <Stack.Screen 
                name='Chatting'
                component={Chatting}
                options={{headerShown: false}}
            /> */}
            <Stack.Screen 
                name='UserProfile'
                component={UserProfile}
                options={{headerShown: false}}
            />
            {/* <Stack.Screen 
                name='MentorProfile'
                component={MentorProfile}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='UpdateProfile'
                component={UpdateProfile}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='TestPage'
                component={TestPage}
                options={{headerShown: false}}
            />  */}

            
        </Stack.Navigator>
    );
};
export default Router;