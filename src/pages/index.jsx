import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Container, CarsContainer } from '../styles/pages/Home'

import api from '../services/api'

import CarSingle from '../components/CarSingle/CarSingle'

export default function Home() {
  const [info, setInfo] = useState([])

  const getInfo = async () => {
    const response = await api.get()

    const res = response.data
    setInfo(res['data'])
  }

  useEffect(() => {
    getInfo()
  }, [])

  function priceFormmated(number) {
    const formatted = parseFloat(number)

    return formatted.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  return (
    <Container>
      <Head>
        <title>Homepage - Amodev</title>
      </Head>

      <h1>Desafio Amodev</h1>
      <CarsContainer>
        {info.map(info => (
          <CarSingle
            key={info.id}
            nameBrand={info.nameBrand}
            nameModel={info.nameModel}
            yearModel={info.yearModel}
            fuel={info.fuel}
            km={info.km}
            price={priceFormmated(info.price ? info.price : 0)}
          />
        ))}
      </CarsContainer>
    </Container>
  )
}
