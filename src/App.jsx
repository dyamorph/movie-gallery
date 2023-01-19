import { Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie/AddMovie.jsx';
import Collection from './components/Collection/Collection.jsx';
import Header from './components/Header/Header.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import RegisterPage from './components/RegisterPage/RegisterPage.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
