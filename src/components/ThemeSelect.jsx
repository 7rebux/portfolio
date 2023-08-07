import useTheme from '~/hooks/useTheme';

const ThemeSelect = () => {
  const [theme, setTheme] = useTheme();

  return (
    <select value={theme()} onchange={(e) => setTheme(e.target.value)}>
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};

export default ThemeSelect;
