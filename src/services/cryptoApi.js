import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const FinancialApiHeaders = {
  'X-RapidAPI-Key': 'db3dd606e3msh50f72cd6a3c10a4p1ecdcejsn0a28363c42c4',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: FinancialApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
  }),
});

export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery,
} = cryptoApi;
