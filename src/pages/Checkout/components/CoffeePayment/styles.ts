import styled from 'styled-components'

export const BoxCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  margin-bottom: 24px;
  padding-bottom: 24px;

  section {
    display: flex;
    gap: 20px;
    padding: 0;
    margin-top: 0;

    img {
      width: 64px;
      height: 64px;
    }

    .ControllerBox {
      display: flex;
      flex-direction: column;
      gap: 8px;

      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme['gray-800']};
      }
    }

    .ControllerButton {
      display: flex;
      gap: 8px;

      .AmountCoffee {
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
          margin: 0;
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

      .remove-coffee {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin: 0;
        padding: 0 8px;
        border: none;
        border-radius: 6px;
        background-color: ${(props) => props.theme['gray-400']};
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${(props) => props.theme['gray-700']};

        svg {
          color: ${(props) => props.theme['purple-300']};
        }
      }
    }
  }

  p {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};
  }
`
