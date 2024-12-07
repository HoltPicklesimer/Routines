import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListEvent } from '../models/Events';

const eventsKey = 'routine-app-events';

const data: ListEvent[] = [
    {
        id: '1',
        name: 'Cruise Day!!',
        date: new Date(2024, 11, 24)
    },
    {
        id: '1.5',
        name: 'Go to port!',
        date: new Date(2024, 11, 24)
    },
    {
        id: '2',
        name: 'Thanksgiving',
        date: new Date(2024, 11, 27)
    },
    {
        id: '2.5',
        name: 'Food Day',
        date: new Date(2024, 11, 27)
    },
    {
        id: '2.6',
        name: 'Family Day',
        date: new Date(2024, 11, 27)
    },
    {
        id: '3',
        name: 'Christmas Eve',
        date: new Date(2024, 12, 24)
    },
    {
        id: '4',
        name: 'Christmas',
        date: new Date(2024, 12, 25)
    },
    {
        id: '4.5',
        name: 'New Year\'s Eve',
        date: new Date(2024, 12, 31)
    },
    {
        id: '5',
        name: 'New Year\'s Day',
        date: new Date(2025, 1, 1)
    },
    {
        id: '6',
        name: 'A new year!!',
        date: new Date(2025, 1, 1)
    }
];

export const getEvents = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(eventsKey);
        return jsonValue ? JSON.parse(jsonValue) as ListEvent[] : [];
    } catch (e) {
        return [];
    }
};

export const addEvent = async (event: ListEvent) => {
    try {
        const events = await getEvents();
        let nextId = 1;
        if (events.length) {
            nextId = Number.parseInt(events[events.length - 1].id) + 1;
        }
        event.id = nextId + '';
        events.push(event);
        const jsonValue = JSON.stringify(events);
        await AsyncStorage.setItem(eventsKey, jsonValue);
        return true;
    } catch (e) {
        return false;
    }
}