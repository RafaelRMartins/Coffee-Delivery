import styled from 'styled-components'

export const FinalPage = styled.main`
  max-width: 1120px;
  padding: 80px 0;
  margin: 0 auto;

  h1 {
    margin-bottom: 4px;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-500']};
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }

  section {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .BoxInfo {
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      border-radius: 6px 36px;
      background: linear-gradient(
            ${(props) => props.theme['gray-100']},
            ${(props) => props.theme['gray-100']}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme['yellow-300']},
            ${(props) => props.theme['purple-300']}
          )
          border-box;
      border: 1px solid transparent;

      .info {
        display: flex;
        align-items: center;
        gap: 12px;

        p {
          font-weight: 400;
          font-size: 1rem;
          color: ${(props) => props.theme['gray-700']};
          line-height: 130%;

          span {
            font-weight: 700;
          }
        }
      }
    }
  }
`
export const CircleColor = styled.div`
  line-height: 0;
  padding: 8px;
  border-radius: 100px;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const CircleMap = styled(CircleColor)`
  background-color: ${(props) => props.theme['purple-300']};
`

export const CircleTimer = styled(CircleColor)`
  background-color: ${(props) => props.theme['yellow-300']};
`

export const CircleCurrency = styled(CircleColor)`
  background-color: ${(props) => props.theme['yellow-500']};
`
