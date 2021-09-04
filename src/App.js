import Counter from "./components/Counter.jsx";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
