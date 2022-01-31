import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  references: [{
    "ArticleID": 2,
    "Title": "video description",
    "PublishDate": "21/12/2000",
    "AuthorNames": "Gigi"
  }
  ],
};

const referencesSlice = createSlice({
  name: "references",
  initialState,
  reducers: {
    addReferences(state, action) {
      const newReferences = {
        ...action.payload,
        comments: [],
      };
      state.references.push(newReferences);
    },
   
   
  },
});

export const referencesActions = referencesSlice.actions;

export default referencesSlice.reducer;