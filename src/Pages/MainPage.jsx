import React from 'react'
import styled from 'styled-components'
import logo from'../Photo/logotip.png'

const Wrapper = styled.div`
`
const Container = styled.div`
 margin-top: -350px;
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
 margin-left: 1300px;
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

const MainPage = () => {
  return (
    <Wrapper>
    <Container>
      <img src={logo} alt='' />
    </Container>
    <Home><h6>Home</h6></Home>
<Works><h6>Works</h6></Works>
<About><h6>About</h6></About>
<Button><button>Contact us</button></Button>
</Wrapper>
  )
}

export default MainPage