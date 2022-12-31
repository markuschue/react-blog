import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout.jsx';
import Home from '../pages/Home.jsx';
import NoPage from '../pages/NoPage.jsx';
import Compose from '../pages/Compose.jsx';
import Post from '../pages/Post.jsx';
import Theme from './Theme.jsx';

/**
 * The main component of the application, which contains the routes and the theme.
 * @returns {JSX.Element} The main component of the application.
 */
function App() {
  return (
    <Theme>
      <BrowserRouter className = 'App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='compose' element={<Compose />} />
            <Route path='compose/:id' element={<Compose />} />
            <Route path='search' element={<Home />} />
            <Route path='drafts' element={<Home />} />
            <Route path='posts/:id' element={<Post />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
