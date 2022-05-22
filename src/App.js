import ProductList from './components/product-list';
import data from './data.json';

import './index.scss';

function App() {
  const products = data.products;

  return (
    <div className='container'>
      <ProductList products={products} />
    </div>
  );
}

export default App;
