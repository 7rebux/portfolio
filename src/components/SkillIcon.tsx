const SkillIcon = (props) => {
  const { src, ...rest } = props;

  // TODO: set theme
  return <img {...rest} src={`${src}&theme=${'light'}`} alt='Skill Icon' />;
};

export default SkillIcon;
