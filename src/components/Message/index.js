import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Message = ({ resultAmount }) => (
  <Segment className="left aligned">
    La recherche a donné {resultAmount} résultats
  </Segment>
);

Message.propTypes = {
  resultAmount: PropTypes.number.isRequired,
};

export default Message;
