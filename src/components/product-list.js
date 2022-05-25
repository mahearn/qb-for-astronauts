import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import Select from 'react-select';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PackageCard from './package-card';
import { validateForm } from './utils';

import './styles/product-list.scss';

const ProductList = ({ products, countries }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ value: '' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = (id) => {
    setShowModal(true);
    setSelectedPackageId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //route to thankyou page (mocking callback from external API)
    const country = selectedCountry.value;
    const validations = validateForm({ name, email, phone, country });

    if (!validations.isValid) {
      setFormErrors(validations);
    } else {
      // route to the thankyou page, using searchparams object to pass form responses
      navigate({
        pathname: 'thankyou',
        search: createSearchParams({
          id: selectedPackageId,
          name,
          email,
          phone,
          country,
        }).toString(),
      });
    }
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
                color: '#1976d2;',
                position: 'absolute',
                top: '15px',
                right: '0',
              }}
            >
              X
            </Button>
            <form className='form' onSubmit={handleSubmit}>
              <h2>Sign up</h2>
              <div className='text-field'>
                <input
                  type='text'
                  name='name'
                  className='text-field__input'
                  value={name}
                  filter='[^a-zA-Z ]'
                  placeholder='Full name'
                  onChange={handleChangeValue}
                />
                <div className='error-text'>{formErrors.name}</div>
              </div>
              <div className='text-field'>
                <input
                  type='text'
                  name='email'
                  className='text-field__input'
                  value={email}
                  placeholder='Email address'
                  onChange={handleChangeValue}
                />
                <div className='error-text'>{formErrors.email}</div>
              </div>
              <div className='text-field'>
                <input
                  type='text'
                  name='phone'
                  className='text-field__input'
                  value={phone}
                  maxLength='10'
                  placeholder='Phone number'
                  onChange={handleChangeValue}
                />
                <div className='error-text'>{formErrors.phone}</div>
              </div>
              <div className='select-field'>
                <Select
                  name='country'
                  placeholder='Select a country'
                  className='country-select'
                  onChange={handleChangeCountry}
                  options={countries}
                />
                <div className='error-text'>{formErrors.country}</div>
              </div>
              <div className='submit-button'>
                <Button
                  type='submit'
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
