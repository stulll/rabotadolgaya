import React from 'react'
import styled from 'styled-components'
import logo from'../Photo/logotip.png'
import Background from '../Photo/Framemain.png'
import Line from '../Photo/Vector.png'
const Wrapper = styled.div`
`
const Container = styled.div`
 margin-left: 100px;
`
const Home = styled.div`
 color: #3c00f2ff;
 font-size: 38px;
 margin-left: 500px;
 margin-top: -150px;
`
 const Works = styled.div`
 font-size: 38px;
 color: #4d4d4dff;
 margin-left: 700px;
 margin-top: -96px;
 `
const About = styled.div`
font-size: 38px;
 color: #4e4e4eff;
 margin-left: 900px;
 margin-top: -99px;
`
const Button = styled.div`
 margin-left: 1200px;
 margin-top: -110px;
button{
        background-color: #3c00f2ff;
        width: 180px;
        height: 70px;
        font-size: 20px;
        color: white;
    }
button:hover{ 
background-color: #000000ff; 
  transform: translateX(0px); 
        }
 `
const Frame = styled.div`
padding-left: 130px;
`
const Text = styled.div`
font-size: 19px;
margin-top: -550px;
`
const Text1 = styled.div`
font-size: 19px;
color: #ff6a00ff;
margin-top: -30px;
`
const Text2 = styled.div`
font-size: 19px;
margin-top: -30px;
`
const Text3 = styled.div`
font-size: 20px;
font-weight: lighter;

`
const Button1 = styled.div`
margin-top:-600px;
button{
      
        background-color: #3c00f2ff;
        width: 230px;
        height: 70px;
        font-size: 20px;
        color: white;
    }
button:hover{ 
background-color: #000000ff; 
  transform: translateX(0px); 
        }
 
`
const Lines = styled.div`
margin-top: -400px;
margin-left: -130px;
`
const MainPage = () => {
  return (
    <Wrapper>
    <Container>
      <img src={logo} alt='logo' />
    </Container>
    <Home><h6>Home</h6></Home>
<Works><h6>Works</h6></Works>
<About><h6>About</h6></About>
<Button><button>Contact us</button></Button>
<Frame>
  <img src={Background} alt='frame' />
  <Text><h1>Make your business</h1></Text>
  <Text1><h1>more powerful</h1></Text1>
  <Text2><h1>with us</h1></Text2>
  <Text3><p>We provide various services to make<br/> your business grow and get bigger. Your<br/> satisfaction is our first priority.</p></Text3>
 <Lines><img src={Line}/></Lines>
 <Button1><button>Get started →</button></Button1>
 
</Frame>

</Wrapper>

  )
}

export default MainPage