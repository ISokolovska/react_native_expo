import * as React from "react";
import { store } from "./redux/store";
import useCachedResources from "./helpers/fonts";
import { Provider } from "react-redux";
import Main from "./components/Main";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
