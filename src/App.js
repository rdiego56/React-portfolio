import React, { Component } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSection: 'about',
      name: 'John Doe',
      email: '',
      message: '',
      isEmailValid: true,
      isFormValid: false,
    };
  }
}
  handleNavigationClick = (section) => {
    this.setState({ currentSection: section });
  }

export default App;
