export const getNumberOfFeatures = (product) => {
  const numberOfFeatures = product.features.length;
  return numberOfFeatures;
};

export const validateForm = (values) => {
  const { name, email, phone, country } = values;
  const validations = {
    isValid: true,
    name: '',
    email: '',
    phone: '',
    country: '',
  };

  if (name.length === 0) {
    validations.name = 'Name is required';
    validations.isValid = false;
  }
  if (email.length === 0 || !email.match(/@./g)) {
    validations.email = 'Email format must be like example@mail.com';
    validations.isValid = false;
  }
  if (phone.length === 0 || !phone.match(/^\d{10}$/)) {
    validations.phone = 'Phone number must be 10 digits';
    validations.isValid = false;
  }
  if (country.length === 0) {
    validations.country = 'Please select country';
    validations.isValid = false;
  }

  return validations;
};
