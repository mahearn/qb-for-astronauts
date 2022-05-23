import ProductList from './components/product-list';
import data from './data.json';

import './index.scss';

function App() {
  const products = data.products;
  const countries = data.countries;

  return (
    <div className='container'>
      <ProductList products={products} countries={countries} />
    </div>
  );
}

export default App;
