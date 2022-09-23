import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { clearLocalStorage, persistLocalStorage } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const UserKey = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem(UserKey)
    ? JSON.parse(localStorage.getItem(UserKey) as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage(UserKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
