import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.section`
    height:100%;
    width: 100%;
    background-color: #6A040F;
`
const SubTitle = styled.h2`
  font-family: 'Merriweather Sans', sans-serif;
  position: relative;
  top: 8vh;
  left: 4.68vw;
  font-size: 4.5vh;
  color: black;
  width: 10vw;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
`

const Intertitle = styled.h3`
  font-family: 'Merriweather Sans', sans-serif;
  position: relative;
  top: 10vh;
  left: 4.68vw;
  margin-bottom: 6vh;
  font-size: 3.5vh;
  color: black;
  width: 65vw;
`
const Text = styled.p`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3vh;
  text-align: justify;
  line-height: 1.5;
  width: 87vw;
  color: black;
  position: relative;
  top: 5vh;
  left: 4.68vw;
`
const List = styled.ul`
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 3vh;
  position: relative;
  top: 5vh;
  left: 4.68vw;
  color: black;
  line-height: 2;
`
const Link = styled.a`
  text-decoration: none;
  color: black;
`

export default class Filmes extends Component{
    render(){
        return(
         <Container id='Triologia:Filmes'>
            <SubTitle>Trilogia</SubTitle>
            <Intertitle>Marvel Studios: A ordem certa para assistir aos filmes e séries</Intertitle>
            <Text>Universo cinematográfico foi iniciado em 2008 com Homem de Ferro, mas tem uma ordem cronológica diferente dos seus lançamentos.</Text>
            <Text>Os lançamentos do Universo Cinematográfico Marvel continuam e por isso inserimos as datas cronológicas para além de Vingadores: Ultimato.</Text>
            <Text>Os anos ao lado de cada filme indicam em que época se passaria a história de cada produção, de acordo com os estúdios.</Text>
            <List>
              <Link href='https://www.disneyplus.com/pt-br/movies/capitao-america-o-primeiro-vingador-da-marvel-studios/6xvB6xZ4r95O' target="_blank"><li>1943/1945 - Capitão América: O Primeiro Vingador</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/capita-marvel/38xJGlLAQy9a' target="_blank"><li>1995 - Capitã Marvel</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/homem-de-ferro-da-marvel-studios/6aM2a8mZATiu' target="_blank"><li>2010 - Homem de Ferro</li></Link>
              <Link href='https://www.netflix.com/watch/70087537?trackId=14277281&tctx=-97%2C-97%2C%2C%2C%2C%2C%2C' target="_blank"><li>2011 - O Incrível Hulk</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/homem-de-ferro-2-da-marvel-studios/lXjCr9QmGGQJ' target="_blank"><li>2011 - Homem de Ferro 2</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/thor-da-marvel-studios/1p4vdKzTuhzr' target="_blank"><li>2011 - Thor</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/the-avengers-os-vingadores-da-marvel-studios/2h6PcHFDbsPy' target="_blank"><li>2012 - Os Vingadores</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/homem-de-ferro-3-da-marvel-studios/3s4Ihq7P2c6e' target="_blank"><li>2012 - Homem de Ferro 3</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/thor-o-mundo-sombrio-da-marvel-studios/ZHk7aM5xTbW7' target="_blank"><li>2013 - Thor: O Mundo Sombrio</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/capitao-america-soldado-invernal-da-marvel-studios/TVme5whcowSy' target="_blank"><li>2014 - Capitão América 2 - O Soldado Invernal</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia-da-marvel-studios/1S4WM9h3KRR6' target="_blank"><li>2014 - Guardiões da Galáxia</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/guardioes-da-galaxia-vol2-da-marvel-studios/ZdRX4mMbp1gM' target="_blank"><li>2014 - Guardiões da Galáxia Vol. 2</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/vingadores-era-de-ultron-da-marvel-studios/76IUxY0rNHzt' target="_blank"><li>2015 - Vingadores: Era de Ultron</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/homem-formiga-da-marvel-studios/5c92KVf1zgUX' target="_blank"><li>2015 - Homem-Formiga</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/capitao-america-guerra-civil-da-marvel-studios/4ovfyKnnIBCg' target="_blank"><li>2016 - Capitão América: Guerra Civil</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/viuva-negra/3VfTap90rwZC' target="_blank"><li>2016 - Viúva Negra (excluindo cena pós-créditos)</li></Link>
              <Link href='https://www.netflix.com/watch/80166369?trackId=255824129&tctx=0%2C5%2CNAPA%40%40%7C0f868f5c-8df7-49d0-92bd-39e3d8601451-22732572_titles%2F1%2F%2Fhomem%20aranha%2F0%2F0%2CNAPA%40%40%7C0f868f5c-8df7-49d0-92bd-39e3d8601451-22732572_titles%2F1%2F%2Fhomem%20aranha%2F0%2F0%2Cunknown%2C%2C0f868f5c-8df7-49d0-92bd-39e3d8601451-22732572%7C2%2C' target="_blank"><li>2016 - Homem-Aranha: De Volta ao Lar</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/doutor-estranho-da-marvel-studios/4GgMJ1aHKHA2' target="_blank"><li>2016/2017 - Doutor Estranho</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/pantera-negra-da-marvel-studios/1GuXuYPj99Ke' target="_blank"><li>2017 - Pantera Negra</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/thor-ragnarok-da-marvel-studios/3XqAT8UV8ojS' target="_blank"><li>2017 - Thor: Ragnarok</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/homem-formiga-e-a-vespa-da-marvel-studios/5D7wkVHmlCKU' target="_blank"><li>2017 - Homem-Formiga e a Vespa</li></Link>
              <Link href='disneyplus.com/pt-br/movies/vingadores-guerra-infinita-da-marvel-studios/1WEuZ7H6y39v' target="_blank"><li>2017 - Vingadores: Guerra Infinita</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/vingadores-ultimato-da-marvel-studios/aRbVJUb2h2Rf' target="_blank"><li>2018-2023 - Vingadores: Ultimato</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/series/wandavision/4SrN28ZjDLwH' target="_blank"><li>2023 - WandaVision</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/series/falcao-e-o-soldado-invernal/4gglDBMx8icA' target="_blank"><li>2023 - Falcão e o Soldado Invernal</li></Link>
              <Link href='https://www.primevideo.com/detail/amzn1.dv.gti.e4b85f95-60b7-b172-232b-3a7f3ffd78c4?ref_=dvm_pds_tit_br_dc_s_g_mkw_sPbryDxhq-dc_pcrid_527120793562&mrntrk=slid__pgrid_122096703783_pgeo_1032056_x__ptid_kwd-1308940403425' target="_blank"><li>2024 - Homem-Aranha: Longe de Casa</li></Link>
              <Link href='' target="_blank"><li>2024 - Homem-Aranha: Sem Volta para Casa</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/eternos/5cmhJAtkt6Jk' target="_blank"><li>2024 - Eternos</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/movies/shang-chi-e-a-lenda-dos-dez-aneis/5GyV9sf9Y041' target="_blank"><li>2024 - Shang-Chi e a Lenda dos Dez Anéis</li></Link>
              <Link href='https://www.disneyplus.com/pt-br/series/gaviao-arqueiro/11Zy8m9Dkj5l' target="_blank"><li>2024 - Gavião Arqueiro</li></Link>
            </List>
             <Text>OBS: <Link href='https://www.disneyplus.com/pt-br/series/loki/6pARMvILBGzF'> Loki </Link> acontece em 2012 com uma versão alternativa do Deus da Trapaça (Tom Hiddleston), mas se passa em uma linha do tempo alternativa da Marvel.
               Enquanto isso, <Link href = 'https://www.disneyplus.com/pt-br/series/what-if/7672ZVj1ZxU9'> What If...? </Link> explora o multiverso do Universo Cinematográfico Marvel, revisitando as histórias durante a Saga do Infinito caso elas tivessem acontecido de uma maneira diferente.</Text>
             <Text>É importante lembrar que a ordem de lançamentos dos filmes e séries não necessariamente correspondem a mesma linha temporal deles.
               Partindo da transformação de Steve Rogers em Capitão América em O Primeiro Vingador nos anos 1940, traçamos a ordem cronológica de todo o Universo da Marvel nas telonas,
               de acordo com as informações fornecidas pelo próprio estúdio, e para quem quiser assistir cada um de acordo com a linha do tempo. 
               Um exemplo é o lançamento do filme Viúva Negra, que nos faz voltar um pouquinho no tempo, lá para 2016 depois de Capitão América: Guerra Civil, quando finalmente descobrimos o que aconteceu em Budapeste.</Text>
        </Container>
        )
    }
}

