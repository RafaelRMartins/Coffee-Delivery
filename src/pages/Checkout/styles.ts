import styled from 'styled-components'

export const Box = styled.div`
  max-width: 1120px;
  margin: 0 auto 80px;
  padding-top: 40px;

  form {
    display: grid;
    gap: 32px;
    grid-template-columns: auto 448px;
  }
`

export const Payment = styled.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  section {
    margin-top: 15px;
    padding: 40px;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px;

    .title-form {
      display: flex;
      gap: 8px;

      svg {
        color: ${(props) => props.theme['yellow-500']};
      }

      span {
        h3 {
          font-weight: 400;
          font-size: 1rem;
          line-height: 130%;
          color: ${(props) => props.theme['gray-800']};
        }
        p {
          margin-top: 2px;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 130%;
          color: ${(props) => props.theme['gray-700']};
        }
      }
    }

    .Dollar {
      svg {
        color: ${(props) => props.theme['purple-300']};
      }
    }

    .area-form {
      margin-top: 32px;

      .address {
        display: grid;
        row-gap: 16px;
        column-gap: 12px;
        grid-template-columns: 200px auto 60px;
        grid-template-areas:
          'CEP . .'
          'Road Road Road'
          'Number Complement Complement'
          'Neighborhood City UF';

        .CEP {
          grid-area: CEP;
        }

        .Road {
          grid-area: Road;
        }

        .Number {
          grid-area: Number;
        }

        .Complement {
          grid-area: Complement;
        }

        .Neighborhood {
          grid-area: Neighborhood;
        }

        .City {
          grid-area: City;
        }

        .UF {
          grid-area: UF;
        }

        input {
          background: #eeeded;
          border: 1px solid #e6e5e5;
          border-radius: 4px;
          padding: 12px;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 130%;
          color: ${(props) => props.theme['gray-700']};

          ::placeholder {
            color: ${(props) => props.theme['gray-600']};
          }

          :focus {
            outline: 0;
            box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-500']};
          }
        }
      }

      .payment {
        display: grid;
        gap: 12px;
        grid-template-columns: auto auto auto;

        input[type='radio'] {
          display: none;
        }

        label {
          /* flex: 1; */
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid ${(props) => props.theme['gray-400']};
          background-color: ${(props) => props.theme['gray-400']};
          border-radius: 6px;

          font-size: 0.75rem;
          line-height: 160%;
          text-transform: uppercase;
          color: ${(props) => props.theme['gray-700']};
          cursor: pointer;

          :hover {
            background-color: ${(props) => props.theme['gray-500']};
          }

          svg {
            color: ${(props) => props.theme['purple-300']};
          }
        }

        input[type='radio']:checked + label {
          background-color: ${(props) => props.theme['purple-100']};
          border: 1px solid ${(props) => props.theme['purple-300']};
        }
      }
    }
  }
`

export const ConfirmOrder = styled.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
  }

  section {
    margin-top: 15px;
    padding: 40px;
    border-radius: 6px 44px;
    background: ${(props) => props.theme['gray-200']};

    .price-list {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .price {
        display: flex;
        justify-content: space-between;

        p {
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 130%;
          color: ${(props) => props.theme['gray-700']};
        }

        .value {
          font-size: 1rem;
        }
      }

      .price-total {
        display: flex;
        justify-content: space-between;

        p {
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 130%;
          color: ${(props) => props.theme['gray-800']};
        }
      }
    }
    .confirm-button {
      margin-top: 24px;
      width: 100%;

      background-color: ${(props) => props.theme['yellow-300']};
      border: none;
      border-radius: 6px;
      padding: 12px;
      color: ${(props) => props.theme.white};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 160%;
      cursor: pointer;

      :hover {
        transition: 0.5s;
        background-color: ${(props) => props.theme['yellow-500']};
      }
    }
  }
`
