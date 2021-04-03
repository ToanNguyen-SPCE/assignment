import { createSlice } from '@reduxjs/toolkit';
export const User = createSlice({
  name: 'user',
  initialState: {
    user: {
        name: 'Jonas HamarHonG',
        yourBid: 148,
        Avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsXGSMZ5rChLvvgCfIXcZqHBnD4Qma9ptCw&usqp=CAU'
    },
  },
  reducers: {
    setYourBid: (state, action) => {
        state.user.yourBid = action.payload;
      }
  },
});

export const { 
    setYourBid
} = User.actions;

export default User.reducer;
