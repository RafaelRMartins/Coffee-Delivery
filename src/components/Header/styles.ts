import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 104px;
  background: ${(props) => props.theme['gray-100']};

  nav {
    max-width: 1120px;
    margin: 32px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Space = styled.div`
  padding-top: 104px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .location {
    padding: 8px;
    background-color: ${(props) => props.theme['purple-100']};
    border-radius: 6px;
    line-height: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${(props) => props.theme['purple-500']};

    path {
      color: ${(props) => props.theme['purple-300']};
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 6px;
    text-decoration: none;
    background-color: ${(props) => props.theme['yellow-100']};

    path {
      color: ${(props) => props.theme['yellow-500']};
    }

    span {
      top: -7px;
      right: -7px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background: ${(props) => props.theme['yellow-500']};
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 0;
      border-radius: 50px;
      color: ${(props) => props.theme.white};
    }
  }
`
