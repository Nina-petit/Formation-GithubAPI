import React from 'react';
import { Input, Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onInputChange, onFormSubmit }) => (
  <section style={{ marginBottom: 10 }}>
    <Segment raised>
      <Form
        onSubmit={onFormSubmit}
      >
        <Form.Field>
          <Input
            size="mini"
            icon="search"
            iconPosition="left"
            placeholder="Search..."
            value={value}
            onChange={(event) => {
              onInputChange(event.target.value);
            }}
          />
        </Form.Field>
      </Form>
    </Segment>
  </section>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
