import { UserType } from './../../../shared/types/userType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserStore {
    user?: UserType
}

const initialState : UserStore = {
    user : undefined
}

export const userSlice  = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action : PayloadAction<UserType>) => {
      state.user = action.payload
    },
  },
})

export const { setUserAction } = userSlice.actions

export default userSlice.reducer