
import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<Home />}
            >
            </Route>
            <Route
              path={"/profile"}
              element={<Profile />}
            ></Route>
            <Route
              path={"/aboutUs"}
              element={<AboutUs />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
};

export default App;
