import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';

export const StoreContext = React.createContext();

function App() {
  const [search, setSearch] = React.useState('');

  return (
    <StoreContext.Provider value={{ search, setSearch }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
