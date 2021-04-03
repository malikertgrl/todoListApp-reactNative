import React from 'react';
import {Text,TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';



export default function TodoItem ({ item, pressHandler }) {
    return(
        <TouchableOpacity onPress = {() => pressHandler(item.key) }>
            <View  style = {Styles.item}>
                <Text> {item.text} </Text>
                <IconAntDesign name="close" size = {20} color="red" />
            </View>
        </TouchableOpacity>
    );
 
}

const Styles = {
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#8559da',
        backgroundColor:'#c5cae9',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    

    }
}