import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const StyledHeroImage = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 400px;
`;

const HeroContent = styled.div`
  padding: 40px;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <StyledHeroImage imageUrl={imageUrl}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroContent>
    </StyledHeroImage>
  );
};

export default HeroImage;
