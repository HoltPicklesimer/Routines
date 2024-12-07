import { Stack } from 'expo-router/stack';

import store from '../scripts/Store';
import { Provider } from 'react-redux';

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
