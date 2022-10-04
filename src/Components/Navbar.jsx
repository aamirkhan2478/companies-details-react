import React from 'react';
import { FaAngleLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header>
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-links">
            {location.pathname === '/' ? (
              ''
            ) : (
              <FaAngleLeft onClick={() => navigate('/')} fontSize={20} />
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <p>Papular Companies</p>
            ) : (
              <p>Company Name</p>
            )}
          </li>
          <li>
            <FaMicrophone fontSize={20} style={{ marginRight: 20 }} />
            <FaRegSun fontSize={20} style={{ marginRight: 20 }} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
