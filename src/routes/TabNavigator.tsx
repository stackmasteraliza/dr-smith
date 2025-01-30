import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import AnalysisScreen from '../screens/AnalysisScreen';
import YoutubeScreen from '../screens/YoutubeScreen';
import {Colors} from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          backgroundColor: 'transparent',
          position: 'absolute',
        },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="home" size={30} color={Colors.white} />
              {focused && (
                <View
                  style={{
                    paddingBottom: focused ? 2 : 0,
                    borderBottomWidth: focused ? 2 : 0,
                    borderBottomColor: Colors.white,
                  }}
                />
              )}
            </View>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="analytics" size={30} color={Colors.white} />
              {focused && (
                <View
                  style={{
                    paddingBottom: focused ? 2 : 0,
                    borderBottomWidth: focused ? 2 : 0,
                    borderBottomColor: Colors.white,
                  }}
                />
              )}
            </View>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="Youtube"
        component={YoutubeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icon name="logo-youtube" size={30} color={Colors.white} />
              {focused && (
                <View
                  style={{
                    paddingBottom: focused ? 2 : 0,
                    borderBottomWidth: focused ? 2 : 0,
                    borderBottomColor: Colors.white,
                  }}
                />
              )}
            </View>
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
