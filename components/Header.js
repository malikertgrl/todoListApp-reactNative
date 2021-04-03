import React from 'react';
import {View, Text} from 'react-native';

const Header = ({headerText}) => {
    const {textStyle,Viewstyle} =Styles;
    return (
        <View style = {Viewstyle}>
            <Text style = {textStyle} > {headerText} </Text>
        </View>
    );
};

const Styles = {
    textStyle:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold'
        
    },
    Viewstyle:{
        height:50,
        backgroundColor:'#140078',
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOffset: { width:0, height:2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 4,
    }
}

export default Header;
