import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Item = {
  name: string;
  arguments_types?: string[];
  return_type?: string;
  type?: string;
  is_operator?: boolean;
  arbitrary_args?: boolean;
};

interface CodeSlice {
  value: string;
  index: number;
  brace: boolean;
  update_tree: boolean;
  data: {
    [key: string]: Item[];
  };
  drawer: boolean;
  text: boolean;
}

// Define the initial state using that type
const initialState: CodeSlice = {
  value: "",
  index: 0,
  brace: false,
  update_tree: false,
  data: {},
  drawer: false,
  text: true,
};

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
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
    toggleDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    toggleText: (state) => {
      state.text = !state.text;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCode,
  setCurrentIndex,
  toggleBrace,
  updateTree,
  setData,
  toggleDrawer,
  toggleText,
} = codeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCode = (state: RootState) => state.code.value;

export const getCurrentIndex = (state: RootState) => state.code.index;

export const getBrace = (state: RootState) => state.code.brace;

export const getUpdateTree = (state: RootState) => state.code.update_tree;

export const getData = (state: RootState) => state.code.data;

export const getDrawer = (state: RootState) => state.code.drawer;

export const getText = (state: RootState) => state.code.text;

export default codeSlice.reducer;
