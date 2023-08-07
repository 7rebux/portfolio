import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

const Header = () => {
  return (
    <header class='flex flex-col sm:flex-row my-0 sm:my-8 sm:justify-around align-middle w-screen'>
      <del />
      <Navbar />
      <ThemeSelect />
    </header>
  );
};

export default Header;
