// == Import npm
import React, { useState } from 'react';
import {
  Container, Image, Grid,
} from 'semantic-ui-react';
import reposData from 'src/data/repos';

import githubLogo from 'src/assets/images/logo-github.png';
import ReposResults from '../ReposResults';
import Message from '../Message';
import SearchBar from '../SearchBar';

// == Import
const axios = require('axios');

// == Composant
const App = () => {
  const [repos, setRepos] = useState(reposData);
  const [inputText, setInputValue] = useState('react');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(inputText);
    axios.get(`https://api.github.com/search/repositories?q=${inputText}`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        // TODO
        console.log(error);
      })
      .finally(() => {
        console.log('Requête terminée');
      });
  };

  return (
    <Container>
      <style>
        {`
          body {
            background-color: #BDC3C7
          }

          .items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content:space-between;
          }

          .item {
            flex-direction: column;
            text-align: left;
          }

          .item-image {
            width: 240px;
          }
        `}
      </style>
      <Container style={{ backgroundColor: '#ECF0F1', width: 800 }}>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ width: 770 }}>
            <Image src={githubLogo} alt="Logo de Github" className="middle aligned" style={{ width: 200 }} />
            <SearchBar
              value={inputText}
              onInputChange={handleInputChange}
              onFormSubmit={handleFormSubmit}
            />
            <Message resultAmount={repos.total_count} />
            <ReposResults repos={repos.items} />
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
};

// == Export
export default App;
