import styled, { css } from "styled-components"

type CountDownProps = {
  isActive: boolean
  progress: number
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    & span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    & span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

export const CountDownButton = styled.button<CountDownProps>`
  position: relative;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: 0.2s ease;

  &:disabled {
    background: var(--gray-line);
    color: var(--text);
    cursor: not-allowed;
  }

  &:after {
    position: absolute;
    content: "";
    width: ${({ progress }) => `${progress}%`};
    height: 0.3rem;
    background: var(--green);
    border-radius: ${({ progress }) =>
      progress < 100 ? "0 0 0px 4px" : "0 0 4px 4px"};
    bottom: 0;
    left: 0;
  }

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: var(--white);
      color: var(--title);
      &:not(:disabled):hover {
        background: var(--red);
        color: var(--white);
      }
    `}
`
