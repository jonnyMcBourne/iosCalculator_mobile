import React from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors, globalStyles } from '../../config/theme/theme';
import { CalculatorBotton  } from '../components';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
    const {height, width, scale, fontScale} = useWindowDimensions();
    
    const {number,buildNumber}=useCalculator()

    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20,width:'100%' }}  >
                <Text style={globalStyles.mainResult}>{number}</Text>
                <Text style={globalStyles.subResult} >70</Text>
            </View>
            <View style={globalStyles.row} >
                <CalculatorBotton onPress={()=>console.log('C')} blackText  label='C' color={colors.lightGray} />
                <CalculatorBotton onPress={()=>console.log('+/-')}  blackText label='+/-' color={colors.lightGray} />
                <CalculatorBotton onPress={()=>console.log('del')} blackText label='del' color={colors.lightGray} />
                <CalculatorBotton onPress={()=>console.log('÷')} label='÷' color={colors.orange}/>
            </View>
            <View style={globalStyles.row} >
                <CalculatorBotton onPress={()=>buildNumber('8')} label='8'  />
                <CalculatorBotton onPress={()=>buildNumber('7')} label='7'  />
                <CalculatorBotton onPress={()=>buildNumber('9')} label='9'  />
                <CalculatorBotton onPress={()=>console.log('X')} label='X' color={colors.orange}/>
            </View>
            <View style={globalStyles.row} >
                <CalculatorBotton onPress={()=>buildNumber('4')} label='4'/>
                <CalculatorBotton onPress={()=>buildNumber('5')} label='5'/>
                <CalculatorBotton onPress={()=>buildNumber('6')} label='6'/>
                <CalculatorBotton onPress={()=>console.log('-')} label='-' color={colors.orange}/>
            </View>
            <View style={globalStyles.row} >
                <CalculatorBotton onPress={()=>buildNumber('1')} label='1'  />
                <CalculatorBotton onPress={()=>buildNumber('2')} label='2'  />
                <CalculatorBotton onPress={()=>buildNumber('3')} label='3'  />
                <CalculatorBotton onPress={()=>console.log('+')} label='+' color={colors.orange}/>
            </View>
            <View style={globalStyles.row} >
                <CalculatorBotton onPress={()=>buildNumber('0')} label='0' longButton />
                <CalculatorBotton onPress={()=>buildNumber('.') } label='.'  />
                <CalculatorBotton onPress={()=>console.log('=')} label='=' color={colors.orange}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    componentContainer: {
    },
    textComponent: {
        color: 'white'
    }
});
