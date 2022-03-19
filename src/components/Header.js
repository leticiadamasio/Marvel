import React, {Component} from 'react'
import styled from 'styled-components'
import marvel from '../img/marvelstudios.png'

const Image = styled.nav`
  height: 25vh;
  background-image: url(${marvel});
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
  @media (max-width:375px){
    height:21vh;
  }
`
const Menu = styled.ul`
  list-style:none;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3.5vh;
  display: flex;
  justify-content: space-evenly;
  color: black;
  background-color: #370617;
  @media (max-width:375px){
    font-size: 2.6vh;
  }
`
const List =styled.a`
   text-decoration:none;
   color: white;
   width: 13%;
   display:flex;
   align-items: center;
   justify-content: center;
   @media (max-width:375px){
    width:35%;
  }
  @media (max-width:768px){
    width:65%;
  }
`
const Header = () => {
    return(
     <section>
       <Image>
        <></>
       </Image>
       <Menu>
          <List href='#Histórias'><li>História</li></List>
          <List href=''><li>Animações</li></List>
          <List href='#Triologia:Filmes'><li>Trilogia: Filmes</li></List>
        </Menu>
     </section>

    )
  }
export default Header