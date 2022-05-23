import { useSearchParams } from 'react-router-dom';

const Thankyou = () => {
  const [searchParams] = useSearchParams();
  const params = [];

  for (let entry of searchParams.entries()) {
    params.push(entry);
  }

  console.log(params);

  return (
    <div>
      <h2>Thanks for your purchase</h2>
      <section>
        <h3>Your details</h3>
        <ul className='thankyou__list'>
          {params?.map((element) => (
            <li className='thankyou__list-element'>
              {element[0]}: {element[1]}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Thankyou;
