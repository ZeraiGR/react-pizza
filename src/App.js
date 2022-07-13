import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';

function App() {
  const [search, setSearch] = React.useState('');

  return (
    <div className="wrapper">
      <Header search={search} setSearch={setSearch} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
