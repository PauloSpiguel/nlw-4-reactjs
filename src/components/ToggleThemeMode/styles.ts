import styled from "styled-components"

interface ContainerProps {
  isChecked: boolean
}

export const Container = styled.div<ContainerProps>`
  > input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  > label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 1.625rem;
    width: 3.125rem;

    background: #111;

    border-radius: 50px;
    padding: 5px;

    > div {
      position: absolute;
      top: 2px;
      left: 2px;

      height: 1.375rem;
      width: 1.375rem;
      border-radius: 50%;

      background: var(--white);
    }

    .moon {
      color: #f1c40f;
    }

    .sun {
      color: #f39c12;
    }

    .ball {
      cursor: pointer;

      transition: transform 0.2s linear;

      transform: ${({ isChecked }) =>
        isChecked ? "translateX(1.5rem)" : "none"};
    }
  }
`
