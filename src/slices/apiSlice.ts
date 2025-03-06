import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import config from '@/config';




const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['facility-data', 'accommodation-applications','problem'],
  endpoints: (builder) => ({}),
});
