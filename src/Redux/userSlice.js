import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userImg: '',
    accessToken: ''
  },
  reducers: {
    setUserImg: (state, action) => {
      state.userImg = action.payload
    },
    setAccessToken: (state, action) => {
        state.accessToken = action.payload
    }, 
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  }
})

export const { setUserImg, setAccessToken, setIsLoggedIn } = userSlice.actions

export default userSlice.reducer