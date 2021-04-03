import React, {useState} from 'react';
import {View, FlatList, Alert, TouchableWithoutFeedback, Keyboard}
from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

function App () {
  const [todos,setTodos] =useState ([
    {text:'Create an App', key:'1'},
    {text:'watching the Tv Series', key:'2'},
    {text:'go to shopping', key:'3'},
    
  ]);
  

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  }
  const submitHandler = (text) => {
    
    if(text.length > 2) {
      setTodos((prevTodos) => {
        return [
          {text:text, key:Math.random().toString() },
          ...prevTodos 
        ]
      })
    }else {
      Alert.alert('OOPS!', 'Notes must be over 2 chars long',[
        {text:'OK', onPress : () => console.log('alert clossed')}
      ]);
    }

  } 


  return (
    <TouchableWithoutFeedback onPress ={() => {
      Keyboard.dismiss()
      console.log('keyboard dismiss')}}>
      <View style = {Styles.container}>
        <Header headerText = {'My Todos'} />
        <View style = {Styles.content}>
          <AddTodo submitHandler = {submitHandler} />
          <View style = {Styles.list}>
            <FlatList
            data = {todos}
            renderItem = {({ item }) => (
              <TodoItem item = {item} pressHandler = {pressHandler} />
            )}           
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = {
  container: {
    flex:1,
    backgroundColor:'#fff',
    
  },
  content : {
    padding:20
  },
  list:{
    marginTop:20,
    
  }
}

export default App;