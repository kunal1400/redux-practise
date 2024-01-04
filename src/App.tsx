import { Provider } from "react-redux";
import { store } from "./redux/store";
import Posts from "./components/posts";
import "./i18";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
