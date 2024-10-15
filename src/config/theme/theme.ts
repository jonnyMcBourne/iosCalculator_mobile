import { StyleSheet } from "react-native";


export const colors ={
    darkGray:'#2D2D2D',
    lightGray:'#9B9B9B',
    orange:'#FF9427',
    
    textPrimary:'white',
    textSecondary:'#666666',
    background:'#000000'
        
}

export const globalStyles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:colors.background
    },
    calculatorContainer:{
        flex:1,
        padding:20,
        justifyContent:'flex-end',
        //width:'',
        //backgroundColor:'red',
        alignItems:'center'
    },
    mainResult:{
        color: colors.textPrimary,
        fontSize: 70,
        textAlign:'right',
        marginBottom:10,
        fontWeight:'300',
    },
    subResult:{
        color: colors.textSecondary,
        fontSize:40,
        fontWeight:'300',
        textAlign:'right'
    },
    button:{
        height:80,
        width:80,
        backgroundColor:colors.darkGray,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
    
    },
    buttonText:{
        textAlign:'center',
        fontSize:30,
        color:'white',
        fontWeight:'300'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:18,
        marginHorizontal: 10,
    }
})
