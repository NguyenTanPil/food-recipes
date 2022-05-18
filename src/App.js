import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Cookies from 'universal-cookie';
import './App.css';
import CreateButton from './components/CreateButton';
import Footer from './components/Footer';
import Header from './components/Header';
import Appearance from './components/Pages/Appearance';
import Category from './components/Pages/Category';
import CreateRecipe from './components/Pages/CreateRecipe';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Profile from './components/Pages/Profile';
import RecipeDetail from './components/Pages/RecipeDetail';
import Recipes from './components/Pages/Recipes';
import Search from './components/Pages/Search';
import getTheme from './components/Theme';
import ToTopButton from './components/ToTopButton';
import GlobalStyle from './GlobalStyles';

function App() {
  const [theme, setTheme] = useState(() => {
    const cookies = new Cookies();
    if (cookies.get('theme')) {
      return cookies.get('theme');
    }
    return { background: 'light', color: 'red' };
  });

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="search" element={<Search />} />
            <Route path="login" element={<Login color={theme.color} />} />
            <Route path="create-recipe" element={<CreateRecipe />} />
            <Route path="save" element={<Recipes />} />
            <Route path="popular" element={<Recipes />} />
            <Route
              path="appearance"
              element={<Appearance theme={theme} setTheme={setTheme} />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/:profileId" element={<Profile />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:recipeId" element={<RecipeDetail />} />
          </Routes>
          <CreateButton color={theme.color} />
          <ToTopButton />
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
