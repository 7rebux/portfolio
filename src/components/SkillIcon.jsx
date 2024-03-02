import { calculatedTheme } from '~/utils/theme.js';

const SkillIcon = (props) => {
  const { src, ...rest } = props;

  return <img {...rest} src={`${src}&theme=${calculatedTheme()}`} alt='Skill Icon' />;
};

export default SkillIcon;
