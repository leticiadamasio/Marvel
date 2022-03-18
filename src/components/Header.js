import React, {Component} from 'react'
import styled from 'styled-components'
import Marvel from '../img/marvelstudios.png'

const Image = styled.nav`
    width: 100%;
    height: 25%;
    background-image: url(${Marvel})
`
const Menu = styled.ul`
  list-style:none;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3.5vh;
  display: flex;
  justify-content: space-evenly;
  color: black;
  background-color: #370617;
`
const List =styled.a`
   text-decoration:none;
   color: white;
   width: 13%;
   display:flex;
   align-items: center;
   justify-content: center;
`

const Header = () => {
    return(
     <section>
       <Image>
        <></>
       </Image>
       <Menu>
          <List href=''><li>História</li></List>
          <List href=''><li>Animações</li></List>
          <List href=''><li>Trilogia:Filmes</li></List>
        </Menu>
     </section>

    )
  }
export default Header