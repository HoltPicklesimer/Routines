import { configureStore } from '@reduxjs/toolkit';
import editorOpenReducer from './reducers/EditorSlice';

export default configureStore({
  reducer: {
    editorOpen: editorOpenReducer
  },
});