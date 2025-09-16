import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import BlogLanding from './pages/Blog/BlogLanding';
import BlogPostView from './pages/Blog/BlogPostView';
import PostByTags from './pages/Blog/PostByTags';
import SearchPosts from './pages/Blog/SearchPosts';

import PrivateRoute from './routes/PrivateRoute';

import Dashboard from './pages/Admin/Dashboard';
import BlogPosts from './pages/Admin/BlogPosts';
import BlogPostEditor from './pages/Admin/BlogPostsEditor';
import Comments from './pages/Admin/Comments';
import AdminLogin from './pages/Admin/AdminLogin';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Rotas Padrão */}
          <Route path="/" element={<BlogLanding />} />
          <Route path="/:slug" element={<BlogPostView />} />
          <Route path="/tag/:tagName" element={<PostByTags />} />
          <Route path="/search" element={<SearchPosts />} />
          {/* Rota Admin */}
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/posts" element={<BlogPosts />} />
            <Route path="/admin/create" element={<BlogPostEditor />} />
            <Route path="/admin/edit/:slug" element={<BlogPostEditor isEdit={true} />} />
            <Route path="/admin/comments" element={<Comments />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          },
        }}
      />
    </div>
  );
};

export default App;
