import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customFetch } from "../../utils";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await customFetch.get("/users/showMe");
    const user = response.data.user;
    return user;
  } catch (error) {
    throw Error("Failed to fetch user data");
  }
});
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await customFetch.delete("/auth/logout");
    toast.success(response.data.msg);
  } catch (error) {
    toast.error("logout error. please try again");
  }
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user };
      state.user = user;
      //localStorage.setItem("user", JSON.stringify(user));
    },
    /*
    logoutUser: (state) => {
      state.user = null;
      // localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
