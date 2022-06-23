import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

// eslint-disable-next-line react/prop-types
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    // eslint-disable-next-line react/prop-types
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  // eslint-disable-next-line react/prop-types
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    // eslint-disable-next-line react/prop-types
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName}
          {' '}
          Price Chart
          {' '}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change:
            {/* eslint-disable-next-line react/prop-types */}
            {coinHistory?.data?.change}
            %
          </Title>
          <Title level={5} className="current-price">
            Current
            {coinName}
            {' '}
            Price: $
            {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
