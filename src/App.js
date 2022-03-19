import React, {Component} from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export default class App extends Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}