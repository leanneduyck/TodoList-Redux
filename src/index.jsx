import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MainView } from "./components/mainview.jsx";
import store from "./store.js";

// renders MainView (TodoList)
// wrapped in Provider, kept getting errors from the store w/Container
const App = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
