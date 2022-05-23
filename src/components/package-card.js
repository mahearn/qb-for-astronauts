import { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { getNumberOfFeatures } from './utils';

const PackageCard = ({ product, handleOpenModal }) => {
  let limit = 5;
  const [loadMoreSize, setLoadMoreSize] = useState(limit);

  function loadMore() {
    //count number of features for this product package
    const featuresLength = getNumberOfFeatures(product);

    if (featuresLength > loadMoreSize) {
      setLoadMoreSize(loadMoreSize + 5);
    }
  }

  return (
    <Card className='product-card'>
      <h2>{product.product_name}</h2>
      <p>${(product.price / 100).toFixed(2)}</p>
      <Button
        onClick={() => handleOpenModal(product.id)}
        sx={{ position: 'absolute', top: '25px', right: '15px' }}
        variant='text'
        color='primary'
      >
        BUY
      </Button>
      <div>{product.description}</div>
      <hr />
      <details className='features__container'>
        <summary>Features</summary>
        {product.features?.slice(0, loadMoreSize).map((feature, index) => (
          <div className='feature__item' key={index}>
            {feature}
          </div>
        ))}
        <Button
          sx={{ fontSize: '0.825em' }}
          onClick={() => loadMore(product.id)}
          variant='text'
        >
          Load more...
        </Button>
      </details>
    </Card>
  );
};

export default PackageCard;
