import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Event from './Event'
import StickyHeaderFlatlist from 'react-native-sticky-header-flatlist';
import { EventDate } from '../../models/Events';
import { getEvents } from '../../scripts/DataAccess';
import EditEvent from './EditEvent';
import { useSelector, useDispatch } from 'react-redux';
import { StateObject } from '../../models/State';
import { setEditorOpen } from '../../scripts/reducers/EditorSlice';

export default function Events() {
  const [events, setEvents] = useState([] as EventDate[]);
  const editorOpen = useSelector((state: StateObject) => {
    return state.editorOpen.value;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEditorOpen(false));
    populateEvents();
  }, []);

  const populateEvents = async () => {
    const data = await getEvents();
    const dateDict: Record<string, EventDate> = {};
    const dateEvents: EventDate[] = [];
    data.forEach(event => {
      const dateString = new Date(event.date).toDateString();
      if (!dateDict[dateString]) {
        dateDict[dateString] = { date: dateString, events: [] };
        dateEvents.push(dateDict[dateString]);
      }
      dateDict[dateString].events.push(event);
    });
    setEvents(dateEvents);
  }
  
  return (
    <View style={styles.container}>
      <EditEvent handleClose={() => dispatch(setEditorOpen(false))} isOpen={editorOpen} />
      <StickyHeaderFlatlist
        keyExtractor={(item, index) => { return item.id + '_' + index; }}
        childrenKey={'events'}
        renderHeader={({item}) => <Text style={styles.dateHeader}>{ item.date }</Text>}
        renderItem={({item}) => <Event event={item} />}
        data={events}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  dateHeader: {
    backgroundColor: '#EFEFEF',
    color: '#6F6F6F'
  },
});
