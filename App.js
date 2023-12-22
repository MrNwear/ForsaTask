import React from "react";
import Bootstrap from "./bootstrap";
import { Provider } from 'react-redux';
import { store } from "redux/store";

export default function App() {
  return(
    <Provider store={store}>
      <Bootstrap />
    </Provider>
  );
}
