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
import RecipeDetail from './components/Pages/RecipeDetail';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:recipeId" element={<RecipeDetail />} />
          </Routes>
          <ToTopButton />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
