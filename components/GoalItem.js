import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem=props=>{
    return (
        <TouchableOpacity activeOpacity={.8} onPress={props.onDelete} >
            <View style={styles.goal}><Text>{props.title}</Text></View>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create(
    {
        goal:{
            padding:5,
            backgroundColor:'#ccc',
            borderColor:'black',
            marginVertical:4,
            borderWidth:1
          }
    }
);
 export default GoalItem;