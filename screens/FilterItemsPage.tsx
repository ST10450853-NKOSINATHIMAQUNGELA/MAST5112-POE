import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Button, FlatList, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../types';
import HomeScreen from './HomeScreen';
const courses = ['Starters', 'Mains', 'desserts'];

type FilterItemsScreenProps = NativeStackScreenProps<RootStackParamList, "FilterItems">;


export default function FilterItemsPage({navigation, route}: FilterItemsScreenProps){
  const [course, setCourse] = useState(courses[0]);


    return(
      <View style={styles.container}>
            
      <Text style={styles.label}>Course:</Text>
      <Picker selectedValue={course} onValueChange={setCourse}>
          {courses.map((course) =>(
              <Picker.Item key={course} label={course} value={course}/>
          ))}
      </Picker>
            

            
                
            
        
        </View>
            
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff"
},
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    label: {
      fontSize: 20,
      marginVertical: 9,
      textAlign: "center"
  },

  });
  