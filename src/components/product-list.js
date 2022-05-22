import './styles/product-list.scss';
import PackageCard from './package-card';

const ProductList = ({ products }) => {
  return (
    <div className='product-cards__container'>
      {products.length > 0 &&
        products.map((product) => (
          <PackageCard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default ProductList;
