import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client'
import { client } from './apollo-graphql';
import { GET_RATES } from './graphql/demo-graphql';
import Demo from './components/Demo';
function App() {

  // const {}
  // console.log("LOADING COMPONENT")
  // const rates = useQuery(GET_RATES, {
  //   variables: {
  //     currency: 'USD',
  //   }
  // })
  // console.log(rates.data)

  return (
    <div className="App">
      <Demo></Demo>
    </div>
  );
}

export default App;
