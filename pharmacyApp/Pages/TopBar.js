import React from 'react';
import {Text} from 'react-native-animatable';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FullQuestios, PdfViewer} from '../screen';
const Tab = createMaterialTopTabNavigator();
const TopBar = () => {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        options={{
          title: ' Questions',
        }}
        name="FullQuestios"
        component={FullQuestios}
      />
      <Tab.Screen
        options={{
          title: 'Instruction',
        }}
        name="PdfViewer"
        component={PdfViewer}
      />
    </Tab.Navigator>
  );
};
export default TopBar;
