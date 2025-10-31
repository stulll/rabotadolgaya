import React from 'react'
import styled from 'styled-components'
const StatsSection = styled.section`
  background-color: #F9F9FD;
  min-height: 100vh;
  padding: 60px 20px;
  max-width: 1350px;
`
const ContentContainer = styled.div`
  max-width: 200px;
  margin-left: 0px;
  display: grid;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`
const StatsColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
`
const DescriptionColumn = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`
const StatCard = styled.div`
  width: 270px;
  height: 300px;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 180px;
`
const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 8px;
  margin-top: 70px;
`
const StatDescription = styled.p`
  font-size: 0.9rem;
  max-width: 120px;
  font-weight: 500;
  line-height: 1.4;
  padding-left: 70px;
  padding-top: 20px;
`
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 20px;
  line-height: 1.2;
`
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 30px;
`
const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
`
const FeatureItem = styled.li`
  padding: 12px 0;
  padding-left: 30px;
  position: relative;
  color: #4a5568;
  line-height: 1.5;
  font-size: 1rem;
`
const Galochka = styled.div`
  width: 24px;
  height: 24px;
  background: #4C40F7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  margin-top: 2px;
`
const StatsCardWrapper = styled.div`
    &:nth-child(2),
    &:nth-child(4) {
        margin-top: -30px;
    }
`
const Customersat = () => {
  return (
     <StatsSection>
      <ContentContainer>
            <StatsColumn>
                <StatsCardWrapper>
                <StatCard>
                    <StatNumber style={{color: '#4C40F7'}}>70K+</StatNumber>
                    <StatDescription>We have more than customers</StatDescription>
                </StatCard>
                </StatsCardWrapper>
                <StatsCardWrapper>
                <StatCard>
                    <StatNumber style={{color: '#FF6800'}}>100+</StatNumber>
                    <StatDescription>Projects we have completed</StatDescription>
                </StatCard>
                </StatsCardWrapper>
                <StatsCardWrapper>
                <StatCard>
                    <StatNumber style={{color: '#FF2D59'}}>10M+</StatNumber>
                    <StatDescription>People who are helped because of our hard work</StatDescription>
                </StatCard>
                </StatsCardWrapper>
                <StatsCardWrapper>
                <StatCard>
                    <StatNumber style={{color: '#4ADB61'}}>200+</StatNumber>
                    <StatDescription>Support from world-renowned companies</StatDescription>
                </StatCard>
                </StatsCardWrapper>
            </StatsColumn>
        <DescriptionColumn>
          <SectionTitle>
            Customer satisfaction is our first priority
          </SectionTitle>
          <SectionSubtitle>
            We serve many customers, ranging from small businesses, medium entrepreneurs 
            to world-renowned companies. Their satisfaction is our purpose. We strive 
            to provide the best service by:
          </SectionSubtitle>

          <FeaturesList>
            <FeatureItem><Galochka/>Provide idea support from our creative team</FeatureItem>
            <FeatureItem><Galochka/>Provide attractive and professional design services</FeatureItem>
            <FeatureItem><Galochka/>Support for service 24 hours a week</FeatureItem>
            <FeatureItem><Galochka/>Helping our customers to grow their business</FeatureItem>
            <FeatureItem><Galochka/>Provide support to market products through online marketplace</FeatureItem>
          </FeaturesList>
        </DescriptionColumn>
      </ContentContainer>
    </StatsSection>  
  )
}

export default Customersat
