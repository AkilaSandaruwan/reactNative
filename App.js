
import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
 
  const [courseGoals, setCourseGoals]=useState([]);
  const [isAddMode, setIsAddMode]=useState(false);
    
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals=>[...currentGoals, {uid:Math.random().toString(),value:goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler=goalId=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.uid !== goalId);
    })
  };

  const cancelGoalAdditionalHandler=()=>{
    setIsAddMode(false);
  };

  return (
    
      <View style={styles.screen}>
        <Button title={"Add New Goal"} onPress={()=>setIsAddMode(true)}/>
        <GoalInput onCancel={cancelGoalAdditionalHandler} visible={isAddMode} onAddGoal={addGoalHandler}/>
        <FlatList keyExtractor={(item, index)=>item.uid} data={courseGoals} renderItem={itemData=><GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.uid)} title={itemData.item.value}/>}/>
    </View> 
    
  );
}

const styles = StyleSheet.create({
 screen:{
  padding:50
 },


 

});
