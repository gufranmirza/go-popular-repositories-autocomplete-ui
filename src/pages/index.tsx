import React from 'react';
import Head from 'next/head';
import withoutAuth from '@/core/components/HOCS/withoutAuth';
import config from '@/core/config';
import Search from '@/containers/Search';

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>{config('Product.Name')} - Search Popular Github Projects</title>
    </Head>
    <Search />
  </div>
);

export default withoutAuth(Home);
