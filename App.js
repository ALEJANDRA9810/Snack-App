import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

import AddAlumnoScreen from './screens/AddAlumnoScreen';
import AlumnoScreen from './screens/AlumnoScreen';
import AlumnoDetailScreen from './screens/AlumnoDetailScreen';

import AddEscuelaScreen from './screens/AddEscuelaScreen';
import EscuelaScreen from './screens/EscuelaScreen';
import EscuelaDetailScreen from './screens/EscuelaDetailScreen';

import AddMaestroScreen from './screens/AddMaestroScreen';
import MaestroScreen from './screens/MaestroScreen';
import MaestroDetailScreen from './screens/MaestroDetailScreen';

const Stack = createStackNavigator();
//
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
        name="AddAlumnoScreen" 
        component={AddAlumnoScreen} 
        options={{ title: 'Add Alumno' }}
      />
      <Stack.Screen 
        name="AlumnoScreen" 
        component={AlumnoScreen} 
        options={{ title: 'Alumno List' }}
      />
      <Stack.Screen 
       name="AlumnoDetailScreen" 
       component={AlumnoDetailScreen} 
       options={{ title: 'Alumno Detail' }}
      />
      <Stack.Screen 
        name="AddEscuelaScreen" 
        component={AddEscuelaScreen} 
        options={{ title: 'Add Escuela' }}
      />
      <Stack.Screen 
        name="EscuelaScreen" 
        component={EscuelaScreen} 
        options={{ title: 'Escuela List' }}
      />
      <Stack.Screen 
       name="EscuelaDetailScreen" 
       component={EscuelaDetailScreen} 
       options={{ title: 'Escuela Detail' }}
      />
      <Stack.Screen 
        name="AddMaestroScreen" 
        component={AddMaestroScreen} 
        options={{ title: 'Add Maestro' }}
      />
      <Stack.Screen 
        name="MaestroScreen" 
        component={MaestroScreen} 
        options={{ title: 'Maestro List' }}
      />
      <Stack.Screen 
       name="MaestroDetailScreen" 
       component={MaestroDetailScreen} 
       options={{ title: 'Maestro Detail' }}
      />
  </Stack.Navigator>


    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}