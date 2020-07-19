import React, {useState} from 'react';
import {View, TextInput,Button, StyleSheet, Modal} from 'react-native'

const GoalInput=props=>{
    const [enteredGoal, setEnteredGoal]=useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      };

    const addGoalHandler=()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

      

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler} style={styles.input} placeholder='Course Goal' />
                <View styles={styles.buttonContainer}>
                    <Button title="Cancel" color="red" onPress={props.onCancel}/>
                    <Button title='ADD' onPress={addGoalHandler}/>
                </View>
            </View>
        </Modal>
        
    );
};

const styles = StyleSheet.create({
    inputContainer:{ 
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
       },
       input:{
        borderColor:'black', borderWidth:1, padding:10, width:'80%',
        marginBottom:10
       },
       buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
        width:'60%'

       },
       button:{
           width:'40%'
       }

});

export default GoalInput;