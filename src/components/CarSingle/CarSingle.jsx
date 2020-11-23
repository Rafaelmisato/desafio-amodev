import React from 'react'
import {
  Container,
  ImagePlaceholder,
  Description,
  DescriptionContainer,
  Price,
} from './index'

const CarContainer = ({
  image,
  nameBrand,
  nameModel,
  yearModel,
  fuel,
  km,
  price,
}) => {
  return (
    <Container>
      {image ? image : <ImagePlaceholder />}
      <h4>
        {nameBrand} {nameModel}
      </h4>
      <DescriptionContainer>
        <Description>
          <div>
            <p>{yearModel}</p>
            <div />
            <p>Automático</p>
          </div>
          <div>
            <p>{fuel}</p>
            <div />
            <p>{km}</p>
          </div>
        </Description>
        <Price>
          <span>R$</span>
          <p>{price}</p>
        </Price>
      </DescriptionContainer>
    </Container>
  )
}

export default CarContainer
