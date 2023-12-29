import { getThemeClass, theme, innerTheme } from '~/utils/theme.js';

const SkillIcon = (props) => {
  const { src, ...rest } = props;
  const themeClass = () => theme() === 'dark' || (theme() === 'system' && innerTheme.systemTheme) ? 'dark' : null

  return <img {...rest} src={`${src}${!themeClass() ? `&theme=light` : ''}`} />;
};

export default SkillIcon;
