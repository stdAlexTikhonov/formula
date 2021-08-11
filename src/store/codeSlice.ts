import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScriptTarget } from "typescript";
import type { RootState } from "./store";

interface CodeSlice {
  value: string;
  index: number;
  brace: boolean;
  update_tree: boolean;
}

// Define the initial state using that type
const initialState: CodeSlice = {
  value: "",
  index: 0,
  brace: false,
  update_tree: false,
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
    toggleBrace: (state) => {
      state.brace = !state.brace;
    },
    updateTree: (state) => {
      state.update_tree = !state.update_tree;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setCode, setCurrentIndex, toggleBrace, updateTree } =
  codeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCode = (state: RootState) => state.code.value;

export const getCurrentIndex = (state: RootState) => state.code.index;

export const getBrace = (state: RootState) => state.code.brace;

export const getUpdateTree = (state: RootState) => state.code.update_tree;

export default codeSlice.reducer;
