import ProductList from './components/product-list';
import data from './data.json';
import { Helmet } from 'react-helmet';

import './index.scss';

function App() {
  const products = data.products;
  const countries = data.countries;

  return (
    <div className='container'>
      <Helmet>
        <title>Quickbooks online for astronauts</title>
        <meta
          name='description'
          content='quickbooks online for astronauts. Browse and order product packages.'
        />
        <meta
          name='keywords'
          content='quickbooks astronauts accounting software'
        />
      </Helmet>
      <ProductList products={products} countries={countries} />
    </div>
  );
}

export default App;
