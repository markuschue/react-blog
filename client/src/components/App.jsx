import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout.jsx';
import Home from '../pages/Home.jsx';
import NoPage from '../pages/NoPage.jsx';
import Compose from '../pages/Compose.jsx';
import Drafts from '../pages/Drafts.jsx';
import Post from '../pages/Post.jsx';
import Theme from './Theme.jsx';

function App() {
  return (
    <Theme>
      <BrowserRouter className = 'App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='compose' element={<Compose />} />
            <Route path='drafts' element={<Drafts />} />
            <Route path='posts/:id' element={<Post />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
