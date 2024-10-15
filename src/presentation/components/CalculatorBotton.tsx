import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../config/theme/theme';

interface BottonProps{
    label:string,
    color?: string
    longButton?:boolean
    blackText?:boolean
    onPress: ()=> void
}

export const CalculatorBotton:FC<BottonProps> = ({label, color='', longButton=false,blackText, onPress}) => {
    const bgColor = [colors.orange,colors.darkGray,colors.lightGray].includes(color) ? color: colors.darkGray;
    return (
            <Pressable
            onPress={()=>onPress()} 
            style={ ({pressed})=> ({
                ...globalStyles.button,
                opacity: (pressed)? 0.8 : 1,
                backgroundColor:bgColor,
                width:(longButton)? 180 : 80,
             })} >
                <Text style={{...globalStyles.buttonText, color: (blackText)? 'black':'white' }}>{label}</Text>
            </Pressable>
    );
};

const styles = StyleSheet.create({});
