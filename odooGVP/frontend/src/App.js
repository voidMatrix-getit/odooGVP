import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/tailwind.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUsPage from './pages/AboutUsPage';
import ProfilePage from './pages/ProfilePage';
import DynamicCardPage from './pages/DynamicCardPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Drawer />
        <main className="p-4">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/about" component={AboutUsPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/dynamic-cards" component={DynamicCardPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
