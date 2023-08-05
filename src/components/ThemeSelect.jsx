import { updateTheme } from '../utils';

const ThemeSelect = () => {
  const toggle = (theme) => {
    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = theme;
    }

    updateTheme();
  };

  return (
    <select value={localStorage.theme ?? 'system'} onchange={(e) => toggle(e.target.value)}>
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ThemeSelect;
