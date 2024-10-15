import React, { useState } from 'react'

export const useCalculator = () => {
    const [number, setNumber ]=useState('0')



    const buildNumber =(numberString:string)=>{
        if(number.includes('.') && numberString=='.') return

        if(number.startsWith('0') || number.startsWith('-0')){

           //if(numberString=='.'){
           // return setNumber(number + numberString)
          // }

          //poner multiple 0 solo despues de un .
        //   if (numberString === '0' && number.includes('.')){
        //    return setNumber(number + numberString)
        //   }
           // evitar poner varios 0 si no hay . anntes
           if(numberString ==='0' &&  !number.includes('.')){
            return
           }

           //evaluar si es diferente de cero,
           if(numberString !== '0' && !number.includes('.') ){
            return setNumber(numberString)
           }

        }

            setNumber(number+numberString)
    }

    return {number, buildNumber}
}
