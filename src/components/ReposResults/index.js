import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Repo from 'src/components/Repo';

const ReposResults = ({ repos }) => (
  <Item.Group>
    {repos.map((repo) => (
      <Segment
        style={{ width: 240, height: 400, marginTop: 0 }}
        key={repo.id}
      >
        <Repo
          key={repo.id}
          fullName={repo.full_name}
          avatar={repo.owner.avatar_url}
          {...repo}
        />
      </Segment>
    ))}
  </Item.Group>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
