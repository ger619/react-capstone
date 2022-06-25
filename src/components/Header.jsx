import React from 'react';
import { Link } from 'react-router-dom';
import {
  AudioOutlined, SettingOutlined, FundOutlined,
} from '@ant-design/icons';
import {
  Avatar, Typography,
} from 'antd';
import './styles/Header.css';
import icon from './images/icon-crypto.png';

const Header = () => (
  <header>
    <nav className="Navbar">
      <ul>
        <Avatar src={icon} size="small" />
        <li>
          <Typography.Title level={3} className="logo">
            <Link to="/">GerCrypto</Link>
          </Typography.Title>
        </li>
        <li>
          <Typography.Title level={3} className="logo">
            <Link to="/"><FundOutlined style={{ color: 'white' }} /></Link>
          </Typography.Title>
        </li>
        <li>
          <Typography.Title level={3} className="logo">
            <Link to="/"><AudioOutlined style={{ color: 'white' }} /></Link>
          </Typography.Title>
        </li>
        <li>
          <Typography.Title level={3} className="logo">
            <Link to="/about"><SettingOutlined style={{ color: 'white' }} /></Link>
          </Typography.Title>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
