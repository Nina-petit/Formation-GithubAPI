import React from 'react';
import { Item } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({
  name, fullName, avatar, description,
}) => (
  <Item>
    <Item.Image src={avatar} size="medium" />

    <Item.Content>
      <Item.Header style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        {fullName}
      </Item.Header>
      <Item.Meta style={{ color: '#BDC3C7', marginBottom: 5 }}>
        {name}
      </Item.Meta>
      <Item.Description>
        {description}
      </Item.Description>
    </Item.Content>
  </Item>
);

Repo.defaultProps = {
  description: ' ',
};

Repo.propTypes = {
  avatar: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Repo;
