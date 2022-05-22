import './styles/header.scss';
import CardMedia from '@mui/material/CardMedia';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import heroImage from '../images/hero-image.jpeg';

function scrollTo(y) {
  window.scrollBy({
    top: y,
    behavior: 'smooth',
  });
}

const Header = () => {
  return (
    <div className='header__hero'>
      <CardMedia image={heroImage} sx={{ height: '100vh' }} />
      <h1 className='header__title'>Quickbooks for Astronauts</h1>
      <div className='header__downarrow'>
        <ArrowCircleDownIcon
          titleAccess='Scroll down'
          sx={{
            fontSize: '3em',
            color: 'white',
          }}
          onClick={() => scrollTo(window.innerHeight)}
        />
      </div>
    </div>
  );
};

export default Header;
