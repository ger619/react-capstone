import React from 'react';
import {
  Typography, Row, Col, Statistic,
} from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import AllCrypto from './AllCrypto';
import './styles/Home.css';

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <div>Loading...</div>;
  return (
    <div className="home">
      <Title level={2} className="heading"> Ger Crypto Stats</Title>
      <Row>
        <Col span={6}><Statistic title="All Crypto" value={globalStats.total} /></Col>
        <Col span={6}><Statistic title="Exchanges" value={globalStats.totalExchanges} /></Col>
        <Col span={6}><Statistic title="Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={6}><Statistic title="Total Volume" value={millify(globalStats.total24hVolume)} /></Col>
      </Row>
      <div className="home-heading-container">
        <p level={2} className="home-title"> Top 10 Cryptocurrencies</p>
        <p level={3} className="show-more"><Link to="/allCrypto">Show More Coins</Link></p>
      </div>
      <AllCrypto simplified />
    </div>
  );
};
export default Home;
