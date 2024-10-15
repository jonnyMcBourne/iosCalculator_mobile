import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import {CalculatorScreen} from './presentation/screens'
import { colors, globalStyles } from './config/theme/theme';
export const App = () => {
    return (
        <SafeAreaView style={globalStyles.background}>
          <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
            <CalculatorScreen/>
        </SafeAreaView>
    );
};

