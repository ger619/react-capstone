import React from 'react';
import {
  Typography, Row, Col, Statistic,
} from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import AllCrypto from './AllCrypto';

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return <div>Loading...</div>;
  return (
    <>
      <Title level={2} className="heading"> Ger Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="All Crypto Currencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 Cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to="/allCrypto">Show More Coins</Link></Title>
      </div>
      <AllCrypto simplified />
    </>
  );
};
export default Home;
