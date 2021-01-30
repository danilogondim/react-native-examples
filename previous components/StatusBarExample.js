import React from 'react';
import { StatusBar } from 'react-native';

const StatusBarExample = () => {
  return (
    <StatusBar //used to change status bar styling
      barStyle="dark-content"
      backgroundColor="yellow"
      // barStyle="white-content"
      // backgroundColor="darkblue"
    >
    </StatusBar>
  )
};

export default StatusBarExample;