import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type Item = {
  name: string;
  args_quantity: number;
  add_nodes: boolean;
};

interface CodeSlice {
  value: string;
  index: number;
  brace: boolean;
  update_tree: boolean;
  data: {
    [key: string]: Item[];
  };
}

// Define the initial state using that type
const initialState: CodeSlice = {
  value: "",
  index: 0,
  brace: false,
  update_tree: false,
  data: {},
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
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setCode, setCurrentIndex, toggleBrace, updateTree, setData } =
  codeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCode = (state: RootState) => state.code.value;

export const getCurrentIndex = (state: RootState) => state.code.index;

export const getBrace = (state: RootState) => state.code.brace;

export const getUpdateTree = (state: RootState) => state.code.update_tree;

export const getData = (state: RootState) => state.code.data;

export default codeSlice.reducer;
