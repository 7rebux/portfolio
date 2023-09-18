import useTheme from '../hooks/useTheme';

const SkillIcon = (props) => {
  const [theme, _] = useTheme();
  const { src, ...rest } = props;

  const isLightMode = () =>
    theme() !== 'dark' &&
    !(theme() === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return <img {...rest} src={`${src}${isLightMode() ? `&theme=light` : ''}`} />;
};

export default SkillIcon;
