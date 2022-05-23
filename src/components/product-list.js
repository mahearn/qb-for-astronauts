import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import Select from 'react-select';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PackageCard from './package-card';
// import { validateAll } from './utils';

import './styles/product-list.scss';

const ProductList = ({ products, countries }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [formValuesAsString, setFormValuesAsString] = useState('');
  // const [queryStringParams, setQueryStringParams] = useState({});
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = (id) => {
    setShowModal(true);
    setSelectedPackageId(id);
  };

  const handleSubmit = () => {
    // const isValid = validateAll(values);
    // if (!isValid) {
    //   return false;
    // }

    //now route to thankyou page (mocking callback from external API)
    navigate({
      pathname: 'thankyou',
      search: createSearchParams({
        id: selectedPackageId,
        name: name,
        email: email,
        phone: phone,
        country: selectedCountry.value,
      }).toString(),
    });
  };

  const handleChangeValue = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        return null;
    }
  };

  const handleChangeCountry = (value) => {
    setSelectedCountry(value);
  };

  const modalStyleOptions = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    p: 4,
  };

  return (
    <>
      <div className='product-cards__container'>
        {products.length > 0 &&
          products.map((product) => (
            <PackageCard
              product={product}
              handleOpenModal={handleOpenModal}
              key={product.id}
            />
          ))}
      </div>
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        contentlabel='Signup form modal'
      >
        <Box
          sx={modalStyleOptions}
          style={{
            height: '400px',
            width: '300px',
            borderRadius: '8px',
            padding: '15px',
          }}
        >
          <div className='form__container'>
            <Button
              variant='text'
              onClick={handleCloseModal}
              sx={{
                fontSize: '1em',
                color: '#000',
                position: 'absolute',
                top: '15px',
                right: '15px',
              }}
            >
              X
            </Button>
            <form className='form'>
              <h2>Sign up</h2>
              <div className='text-field'>
                <input
                  type='text'
                  name='name'
                  value={name}
                  filter='[^a-zA-Z ]'
                  placeholder='Full name'
                  onChange={handleChangeValue}
                />
              </div>
              <div className='text-field'>
                <input
                  type='text'
                  name='email'
                  value={email}
                  placeholder='Email address'
                  onChange={handleChangeValue}
                />
              </div>
              <div className='text-field'>
                <input
                  type='text'
                  name='phone'
                  value={phone}
                  maxLength='10'
                  placeholder='Phone number'
                  onChange={handleChangeValue}
                />
              </div>
              <div className='select-field'>
                <Select
                  name='country'
                  // value={selectedCountry}
                  placeholder='Select a country'
                  className='country-select'
                  // onChange={(value) => handleChangeCountry(value)}
                  onChange={handleChangeCountry}
                  options={countries}
                />
              </div>
              <div className='submit-button'>
                <Button
                  variant='outlined'
                  size='large'
                  fullWidth={true}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ProductList;
