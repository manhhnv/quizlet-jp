import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { client } from "./apollo-graphql";
import { GET_RATES } from "./graphql/demo-graphql";
import Demo from "./components/Demo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import AppRouters from "./routers/Routers";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { ToastProvider } from "react-toast-notifications";
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
          {/* <Header></Header>
          <Footer></Footer> */}
          <AppRouters />
        </div>
  );
}

export default App;
