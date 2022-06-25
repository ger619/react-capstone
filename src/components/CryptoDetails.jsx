import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import {
  Col, Row, Typography,
} from 'antd';
import {
  // eslint-disable-next-line max-len
  MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined,
} from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import './styles/CryptoDetails.css';

const { Title, Text } = Typography;

const CryptoDetails = () => {
  const { uuid } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <div>Loading...</div>;

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
    <Col className="coin-details-container">
      <Row>
        <Col className="coin-heading-container">
          <Title level={2} className="coin-name">
            {cryptoDetails?.name}
            {' '}
            Price
          </Title>
          <p>
            Live price in USD View value statistics for
            {' '}
            {cryptoDetails?.name}
            {' '}
            market cap, volume, and more.
          </p>

        </Col>
      </Row>
      <Row>
        <Col className="stats-container">
          <Col className="coin-value-heading">
            <Title level={3} className="coin-value-stats-title">
              {cryptoDetails?.name}

              {' '}
              Value Statistics
            </Title>
            <p>
              View value statistics for
              {cryptoDetails?.name}
              {' '}
              market cap, volume, and more.
            </p>
          </Col>
          {stats.map(({ icon, title, value }) => (
            // eslint-disable-next-line react/jsx-key
            <Col className="coin-stats">
              <Col className="stat-stat-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
                <Text className="stats">{value}</Text>
              </Col>
            </Col>
          ))}
        </Col>
        <Col className="stats-container">
          <Col className="coin-value-heading">
            <Title level={3} className="coin-value-stats-title">
              Other Statistics
            </Title>
            <p>
              View value statistics for All Cryptocurrencies.
              market cap, volume, and more.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            // eslint-disable-next-line react/jsx-key
            <Col className="coin-stats">
              <Col className="stat-stat-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
                <Text className="stats">{value}</Text>
              </Col>
            </Col>
          ))}
        </Col>
      </Row>
      <Col className="coin-desk-link">
        <Row>
          <Title level={3} className="coin-details-heading">
            What is
            {' '}
            {cryptoDetails?.name}
          </Title>
          <Text>{HTMLReactParser(cryptoDetails?.description) }</Text>
        </Row>

      </Col>

    </Col>
  );
};
export default CryptoDetails;
