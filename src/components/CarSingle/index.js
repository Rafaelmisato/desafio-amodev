import styled from 'styled-components'

export const Container = styled.section`
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 10px;

  h4 {
    margin: 8px 6px 6px 6px;
    color: #969696;
    font-weight: 500;
  }
`

export const ImagePlaceholder = styled.div`
  width: 300px;
  height: 200px;
  background: #ccc;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6px;
`

export const Description = styled.div`
  div {
    display: flex;
    margin-bottom: 8px;

    p {
      font-weight: 300;
      font-size: 14px;
    }

    div {
      width: 2px;
      background: #969696;
      margin: 0 10px;
    }
  }
`

export const Price = styled.div`
  margin-top: -10px;

  span {
    font-weight: 300;
    font-size: 14px;
  }
  p {
    color: var(--text-secondary);
    font-weight: 700;
    font-size: 18px;
  }
`
