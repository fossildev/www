import React from 'react';
import Layout from '../components/indexLayout';
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet';

const NotFoundPage = () => (
  <Layout>
    <CustomHelmet page={GatsbyConfig.siteMetadata} />
    <div className="page">
    <div className="container">
      <h1>NOT FOUND</h1>
        <p>Halaman belum dibikin atau emang ga ada :(</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
