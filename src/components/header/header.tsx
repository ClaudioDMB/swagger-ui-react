import './header.css';

const Header = (props) => (
  <nav className='navbar bg-dark d-flex justify-content-center'>
    <h3 className='fw-bold text-white'>{props?.title}</h3>
    <h6 className='text-white'>{props?.version}</h6>
  </nav>
);

export default Header;
