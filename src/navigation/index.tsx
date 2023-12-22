import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import AppBottomTabs from './BottomTabs';

interface AppContainerProps {}

const AppContainer = (props: AppContainerProps) => {
  
  return (
    <NavigationContainer>
      <AppBottomTabs />
    </NavigationContainer>
  );
};

export default AppContainer;
