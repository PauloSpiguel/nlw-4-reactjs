import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    background: var(--gray-line);
    border-radius: 4px;
    margin: 0 1.5rem;
    position: relative;

    .current-experience {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);

      &::before {
        content: "";
        width: 4px;
        border-radius: 4px;
        height: 12px;
        background: var(--gray-line);
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: -10px;
      }
    }
  }

  > div > div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
  }
`;
