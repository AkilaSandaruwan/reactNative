
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,ScrollView} from 'react-native';

export default function App() {
  
  const [enteredGoal, setEnteredGoal]=useState('');
  const [courseGoals, setCourseGoals]=useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };
  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, enteredGoal]);
  }
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={goalInputHandler} style={styles.input} placeholder='Course Goal' />
          <Button title='ADD' onPress={addGoalHandler}/>
        </View>
        <View>
          {courseGoals.map((goal)=><View style={styles.goal} key={goal}><Text>{goal}</Text></View>)}
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 screen:{
  padding:50
 },
 inputContainer:{
  flexDirection:'row', 
  justifyContent:'space-between', 
  alignItems:'center'
 },
 input:{
  borderColor:'black', borderWidth:1, padding:10, width:'80%'
 },
 goal:{
   padding:5,
   backgroundColor:'#ccc',
   borderColor:'black',
   marginVertical:4,
   borderWidth:1
 }

});
