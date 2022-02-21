import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import SlideNav from "./shared/SlideNav";
import Register from "./pages/Register/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import store from "./context/Reducers/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <SlideNav></SlideNav>
          <div className="content-app">
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="/Search" element={<Search />}></Route>
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
