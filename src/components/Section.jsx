import PropTypes from 'prop-types';
import { Title } from './styled';

export const Section = ({ title }) => {
  return <Title> {title} </Title>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
