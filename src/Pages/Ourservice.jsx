import React from 'react'
import styled from 'styled-components'
import Strelka from '../Photo/Vector.svg'
import Ogon_normal from '../Photo/ogon.svg'
import Ogon_hover from '../Photo/ogon_hover.svg'
import Ruchka_normal from '../Photo/ruchka_normal.svg'
import Ruchka_hover from '../Photo/ruchka_hover.svg'
import Copm_normal from '../Photo/Comp_normal.svg'
import Copm_hover from '../Photo/Comp_hover.svg'
import Tel_normal from '../Photo/Tel_normal.svg'
import Tel_hover from '../Photo/Tel_hover.svg'
import Gorod_normal from '../Photo/gorod_normal.svg'
import Gorod_hover from '../Photo/gorod_hover.svg'
import Stata_normal from '../Photo/stata_normal.svg'
import Stata_hover from '../Photo/stata_hover.svg'
const Korobka = styled.div`
    
`
const ImageContainer = styled.div`
margin-top:44px;
  position: relative;
  width: 150px;
  height: 150px;
  align-self: center;
  margin-bottom: 20px;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Text1 = styled.div`
font-size: 7px;
margin-top: 236px;
color: #FF2D59;
text-align:center;
`
const Text2 = styled.div`
font-size: 15px;
color: black;
margin-left: 230px;
text-align:center;
max-width: 1000px;
`
const Cartochki1 = styled.div`
display: flex;
  flex-direction: row;
  max-width: 5000px;
  margin: 0 auto;
  padding: 20px;
    h1{
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    color: black;
    }
    h2{
    margin-top: 16px;
    text-align: center;
    font-size: 18px;
    color: black;
    font-weight: lighter;
    }
`
const Cartochki2 = styled.div`
display: flex;
  flex-direction: row;
  max-width: 5000px;
  margin: 0 auto;
  padding: 20px;
    h1{
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    color: black;
    }
    h2{
    margin-top: 16px;
    text-align: center;
    font-size: 18px;
    color: black;
    font-weight: lighter;
    }
`

const Card1 = styled.div`
display: flex;
flex:1;
justify-content: space-between;
width: 200px;
flex-direction: column;
border-radius: 18px;
padding: 20px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
background: white;
outline:none;
&:hover {
    h1{
        color: white;
    }
    h2{
        color: white;
    }
    background-color: blue;
    .ogon-normal {
        opacity: 0;
    }
    .ogon-hover {
        opacity: 1;
    }
    .ruchka-normal {
        opacity:0;
    }
    .ruchka-hover{
        opacity:1;
    }
    .comp-normal {
        opacity:0;
    }
    .comp-hover{
        opacity:1;
    }
    .tel-normal{
        opacity:0;
    }
    .tel-hover{
        opacity:1;
    }
    .gorod-normal{
        opacity:0;
    }
    .gorod-hover{
        opacity:1;
    }
    .stata-normal{
        opacity:0;
    }
    .stata-hover{
        opacity:1;
    }
}
`
const ArrowRightButton = styled.button`
  align-self: center;
  margin-top: 44px;
  margin-bottom: 44px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #F3F4F6;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  outline: none;
  
`
const Bimg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
const NormalImage = styled.img`
    opacity:1;
`
const HoverImage = styled(Image)`
  opacity: 0;
`
const CardTitle = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: clamp(16px, 2vw, 20px);
    color: black;
    transition: color 0.3s ease;
    margin: 0;
    padding: 0;
`

const CardD = styled.h2`
    margin-top: 16px;
    text-align: center;
    font-size: clamp(14px, 1.8vw, 18px);
    color: black;
    font-weight: lighter;
    transition: color 0.3s ease;
    margin: 0;
    padding: 0;
    line-height: 1.4;
`
const Ourservice = () => {
  return (
    <Korobka>
    <Text1><h1>Our Services</h1></Text1>
    <Text2><h1>The various services we provide to make your business more powerful</h1></Text2>
    <Cartochki1>
        <Card1>
        <ImageContainer>
            <NormalImage src={Ogon_normal}
            alt="Ogon Normal" 
            className="ogon-normal"
            />
            <HoverImage src={Ogon_hover}
            alt="Ogon Hover" 
            className="ogon-hover" 
            />
        </ImageContainer>
            <CardTitle>Ideate</CardTitle>
            <CardD>We help you develop creative<br></br> ideas so that your business can<br></br> grow more rapidly</CardD>
            <ArrowRightButton><Bimg src={Strelka}/></ArrowRightButton>
        </Card1>
        <Card1>
            <ImageContainer>
                <NormalImage src={Ruchka_normal}
                alt="Ruchka normal"
                className="ruchka-normal"
            />
                <HoverImage src={Ruchka_hover}
                alt="Ruchka hover"
                className="ruchka-hover"
                />
            </ImageContainer>
            <CardTitle>Design</CardTitle>
            <CardD>We provide services with the<br></br> best designs than our designer<br></br> team for your business</CardD>
            <ArrowRightButton><Bimg src={Strelka}/></ArrowRightButton>
        </Card1>
        <Card1>
        <ImageContainer>
            <NormalImage src={Copm_normal}
            alt="Comp Normal" 
            className="comp-normal"
            />
            <HoverImage src={Copm_hover}
            alt="Comp Hover" 
            className="comp-hover" 
            />
        </ImageContainer>
            <CardTitle>Web Development</CardTitle>
            <CardD>We help develop company<br></br> websites to be more<br></br> professional and attractive</CardD>
            <ArrowRightButton><Bimg src={Strelka}/></ArrowRightButton>
        </Card1>
    </Cartochki1>
    <Cartochki2>
        <Card1>
        <ImageContainer>
            <NormalImage src={Tel_normal}
            alt="Tel Normal" 
            className="tel-normal"
            />
            <HoverImage src={Tel_hover}
            alt="Tel Hover" 
            className="tel-hover" 
            />
        </ImageContainer>
            <CardTitle>App Development</CardTitle>
            <CardD>We help develop company<br></br> mobile apps to be more<br></br> professional and attractive</CardD>
            <ArrowRightButton><Bimg src={Strelka}/></ArrowRightButton>
        </Card1>
        <Card1>
        <ImageContainer>
            <NormalImage src={Gorod_normal}
            alt="Gorod Normal" 
            className="gorod-normal"
            />
            <HoverImage src={Gorod_hover}
            alt="Gorod Hover" 
            className="gorod-hover" 
            />
        </ImageContainer>
            <CardTitle>Business Growth</CardTitle>
            <CardD>We also provide services by<br></br> providing input for your<br></br> business growth</CardD>
            <ArrowRightButton><Bimg src={Strelka}/></ArrowRightButton>
        </Card1>
        <Card1>
        <ImageContainer>
            <NormalImage src={Stata_normal}
            alt="Stata Normal" 
            className="stata-normal"
            />
            <HoverImage src={Stata_hover}
            alt="Stata Hover" 
            className="stata-hover" 
            />
        </ImageContainer>
            <CardTitle>Digital marketing</CardTitle>
            <CardD>We also help you market your<br></br> products trough an online<br></br> marketplace</CardD>
            <ArrowRightButton><Bimg src={Strelka}/></ArrowRightButton>
        </Card1>
    </Cartochki2>
    </Korobka>

  )
}

export default Ourservice