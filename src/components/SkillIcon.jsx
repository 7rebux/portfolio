import { systemTheme, theme } from '../hooks/useTheme';

const SkillIcon = (props) => {
  // const [theme, _] = useTheme();
  const { src, ...rest } = props;

  const isLightMode = () => theme() !== 'dark' && !(theme() === 'system' && systemTheme());

  return <img {...rest} src={`${src}${isLightMode() ? `&theme=light` : ''}`} />;
};

export default SkillIcon;
