import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 256px;
  height: 310px;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  padding: 0 20px;

  img {
    margin-top: -20px;
  }

  h1 {
    margin-top: 16px;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }

  p {
    margin-top: 8px;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CardTags = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 4px;
  justify-content: center;
  flex-wrap: wrap;

  span {
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    padding: 4px 8px;
    color: ${(props) => props.theme['yellow-500']};
    background-color: ${(props) => props.theme['yellow-100']};
    border-radius: 100px;
    text-transform: uppercase;
  }
`
export const PriceAndCart = styled.div`
  margin-top: 33px;
  display: flex;
  align-items: center;

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-700']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
    margin-right: 23px;
  }

  section {
    max-width: 118px;
    display: flex;

    div {
      max-width: 72px;
      padding: 8px;
      display: flex;
      border-radius: 6px;
      gap: 4px;
      background-color: ${(props) => props.theme['gray-400']};

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input {
        width: 20px;
        border: none;
        text-align: center;
        background-color: ${(props) => props.theme['gray-400']};
      }

      button {
        border: none;
        line-height: 0;
        background-color: ${(props) => props.theme['gray-400']};
        color: ${(props) => props.theme['purple-300']};

        :focus {
          box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
          border-radius: 4px;
        }

        :hover {
          color: ${(props) => props.theme['purple-500']};
        }
      }
    }

    .ButtonCart {
      border: none;
      margin-left: 8px;
      line-height: 0;
      border-radius: 6px;
      padding: 8px;
      background-color: ${(props) => props.theme['purple-500']};
      color: ${(props) => props.theme.white};

      :focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-300']};
        border-radius: 4px;
      }

      :hover {
        background-color: ${(props) => props.theme['purple-300']};
      }
    }
  }
`
