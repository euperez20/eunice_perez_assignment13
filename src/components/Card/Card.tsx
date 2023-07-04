import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <StyledCard>
      {imageSrc && <CardImage src={imageSrc} alt="Card Image" />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

export default Card;
