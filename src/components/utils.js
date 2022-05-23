export const getNumberOfFeatures = (product) => {
  const numberOfFeatures = product.features.length;
  return numberOfFeatures;
};

export const validateAll = (values) => {
  const { name, email, phone, country } = values;
  const validations = {
    name: '',
    email: '',
    phone: 0,
    country: '',
  };
  let isValid = true;

  if (name.length === 0) {
    validations.name = 'Name is required';
    isValid = false;
  }
  if (email.length === 0) {
    validations.email = 'Email is required';
    isValid = false;
  }
  if (email && !email.match(/@./g)) {
    validations.email = 'Email format must be like example@mail.com';
    isValid = false;
  }
  if (phone && !phone.match(/^\d{10}$/)) {
    validations.phone = 'Phone number must be 10 digits';
    isValid = false;
  }
  if (country === '') {
    isValid = false;
  }

  return isValid;
};
