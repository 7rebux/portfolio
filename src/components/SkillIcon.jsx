import { getThemeClass } from '~/utils/theme.js';

const SkillIcon = (props) => {
  const { src, ...rest } = props;

  return <img {...rest} src={`${src}${!getThemeClass() ? `&theme=light` : ''}`} />;
};

export default SkillIcon;
