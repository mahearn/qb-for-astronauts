import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './styles/thankyou.scss';

const Thankyou = () => {
  const [searchParams] = useSearchParams();
  const params = [];

  for (let entry of searchParams.entries()) {
    params.push(entry);
  }

  return (
    <div>
      <Helmet>
        <title>Thanks for your order!</title>
        <meta
          name='description'
          content='quickbooks online for astronauts. Browse and order product packages.'
        />
        <meta
          name='keywords'
          content='quickbooks astronauts accounting software'
        />
      </Helmet>
      <h1>Thanks for your order!</h1>
      <section>
        <h2>Your details:</h2>
        <ul className='thankyou__list'>
          {params?.map((element) =>
            element[0] !== 'id' ? (
              <li
                key={element[0]}
                className='thankyou__list-element capitalise'
              >
                <strong>{element[0]}</strong>: {element[1]}
              </li>
            ) : (
              <li key={element[0]} className='thankyou__list-element'>
                <strong>Package #</strong>: {element[1]}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default Thankyou;
