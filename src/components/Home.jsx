import React from 'react';
import {
  Typography, Row, Col, Statistic,
} from 'antd';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Home = () => {
  const { data } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);
  return (
    <>
      <Title level={2} className="heading"> Ger Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="All Crypto Currencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="All Crypto Currencies" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="All Crypto Currencies" value="5" /></Col>
        <Col span={12}><Statistic title="All Crypto Currencies" value="5" /></Col>
      </Row>
    </>
  );
};
export default Home;
