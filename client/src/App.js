import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Category from './components/Pages/Category';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import { light } from './components/Theme';
import ToTopButton from './components/ToTopButton';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
          </Routes>
        </Router>
        <ToTopButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
