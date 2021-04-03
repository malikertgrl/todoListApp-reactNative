import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


export default function AddTodo ({submitHandler}) {
    const [text, setText] = useState('');

    
    const changeHandler = (val) => {   
        setText(val);
   
    }

    return(
        <View>
            <TextInput 
            style = {Styles.input}
            placeholder = 'add Item'
            onChangeText = {changeHandler}
            value={text}
            />
            <TouchableOpacity onPress = {() => submitHandler(text)}>
                <View style = {Styles.btnStyle}>
                    <Text style={Styles.txtStyle}>
                    <IconAntDesign name = 'pluscircleo' size={20} />
                    Add Item</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Styles = {
    input : {
        marginTop:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderColor:'#8559da'
    },
    btnStyle :{
        backgroundColor:'#512da8',
        padding:10,
        borderRadius:5,

       
    },
    txtStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize:20
    }
}