import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Header from './layout/header';
import Footer from './layout/footer';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Setting from './pages/settings';
import EditArticle from './pages/editArticles';
import CreateArticle from './pages/createArticles';
import Article from './pages/article';
import Profile from './pages/profile';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/settings' element={<Setting />} />
          <Route path='/editor' element={<CreateArticle />} />
          <Route path='/editor/article-slug-here' element={<EditArticle />} />
          <Route path='/article/article-slug-here' element={<Article />} />
          <Route path='/profile/:username' element={<Profile />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
