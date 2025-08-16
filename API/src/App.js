import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import { Menu } from './components/menu/Menu';
import NotFound from './pages/notFound/NotFound';
import NewsDetail from './pages/news/NewsDetail';
import User from './pages/users/User';
import Room from './pages/room/Room';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/news-detail' element={<NewsDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<User />} />        
        <Route path='/room' element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
