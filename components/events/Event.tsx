import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { ListEvent } from '../../models/Events';

export interface EventProps {
  event: ListEvent
}

// TODO: set x icon color to prop passed color from user set pallette

export default function Event(props: EventProps) {
  const { event } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{event.name}</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => alert('delete')}>
        <MaterialIcons size={28} name="clear" color={'white'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    alignItems: 'center'
  },
  button: {
    marginLeft: 'auto'
  }
});
