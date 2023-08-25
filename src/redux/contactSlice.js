import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactList: [],
  selectedContact: null,
  showContactModal: false,
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    updateContacts: (state, action) => {
      state.contactList = action.payload;
    },
    updateSelectedContact: (state, action) => {
      state.selectedContact = action.payload;
      state.showContactModal = !!action.payload;
    }
  },
});

export const { updateContacts, updateSelectedContact } = contactSlice.actions;
export default contactSlice.reducer;