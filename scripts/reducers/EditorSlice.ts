import { createSlice } from '@reduxjs/toolkit'

export const editorOpenSlice = createSlice({
  name: 'editorOpen',
  initialState: {
    value: false,
  },
  reducers: {
    setEditorOpen: (state, payload) => {
        state.value = payload.payload;
    }
  },
});

export const { setEditorOpen } = editorOpenSlice.actions;

export default editorOpenSlice.reducer;