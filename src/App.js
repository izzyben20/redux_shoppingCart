import React from "react";
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const App = () => {
  // cart setup

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Provider>
  );
}

export default App;
