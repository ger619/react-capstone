import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Input,
} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
// eslint-disable-next-line react/prop-types
const AllCrypto = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    // eslint-disable-next-line max-len
    const filterData = cryptosList?.data?.coins?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <div>Loading...</div>;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrencies" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}

      <Row gutter={[28, 28]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card
                title={`${crypto.rank}.${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} style={{ width: 48 }} alt="Crypto" />}
                hoverable
              >
                <p>
                  Price:
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
};

export default AllCrypto;
