import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Offers from './pages/Offers';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

function ProtectedRoutes({ redirectTo }: { redirectTo: string }) {
  const { address } = useContext(UserContext);

  return address.cep ? <Outlet /> : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes redirectTo={"/"} />}>
          <Route path="/offers" element={<Offers />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
