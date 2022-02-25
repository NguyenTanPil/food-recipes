import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Category from './components/Pages/Category';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import RecipeDetail from './components/Pages/RecipeDetail';
import Recipes from './components/Pages/Recipes';
import { light } from './components/Theme';
import ToTopButton from './components/ToTopButton';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="login" element={<Login />} />
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
