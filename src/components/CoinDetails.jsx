import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Input,
} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

function CoinDetails() {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  console.log(cryptos);
  return (
    <>
      <Row gutter={[28, 28]} className="crypto-card-container">
        {cryptos.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}.${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} style={{ width: 48 }} />}
                hoverable

              >

                <p>
                  Price
                  {millify(crypto.price)}
                </p>
                <p>
                  Market Cap:
                  {millify(crypto.marketCap)}
                </p>
                <p>
                  Daily Change:
                  {millify(crypto.change)}
                  %
                </p>
              </Card>

            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CoinDetails;
