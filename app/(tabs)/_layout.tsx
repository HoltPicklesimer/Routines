import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { setEditorOpen } from '../../scripts/reducers/EditorSlice';

const tabBarActiveTintColor = 'blue';
const tabBarInactiveTintColor = 'lightgray';

export default function TabLayout() {
  const dispatch = useDispatch();
  const addEventButton = () => 
    <TouchableOpacity
      onPress={() => dispatch(setEditorOpen(true))}
      style={styles.addButton}>
      <MaterialIcons size={28} name="add" color={tabBarInactiveTintColor} />
    </TouchableOpacity>;

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor, tabBarInactiveTintColor }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Upcoming Events',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
          headerRight: addEventButton
        }}
      />
      <Tabs.Screen
        name="routines"
        options={{
          title: 'Routines',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="reminder" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginLeft: 15,
    marginRight: 15
  }
});
