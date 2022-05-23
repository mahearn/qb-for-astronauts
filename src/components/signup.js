import './styles/signup.scss';

const Signup = () => {
  return (
    <div className='form__container'>
      <form className='mui-form'>
        <h2>Signup</h2>
        <div class='mui-textfield'>
          <input type='text' placeholder='Your full name' />
        </div>
        <div class='mui-textfield'>
          <input type='text' placeholder='Email address' />
        </div>
        <div class='mui-textfield'>
          <input type='text' placeholder='Phone number' />
        </div>

        <button type='submit' class='mui-btn mui-btn--raised'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
