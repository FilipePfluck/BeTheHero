import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incident from './pages/incidents'
import Detail from './pages/detail';

export default function Routes(){
    return(
        <NavigationContainer screenOption ={{ headerMode: 'none', header:null}}>
            <AppStack.Navigator>
                <AppStack.Screen name="Incidents" component={Incident}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}