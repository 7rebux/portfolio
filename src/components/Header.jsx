import Navbar from './Navbar';
import ThemeSelect from './ThemeSelect';

const Header = () => {
  return (
    <header class='flex flex-col sm:flex-row my-0 sm:my-8 sm:justify-around items-center w-screen'>
      <del class='flex-grow basis-0' />
      <Navbar />
      <div class='flex-grow basis-0 inline-flex justify-center'>
        <ThemeSelect />
      </div>
    </header>
  );
};

export default Header;
