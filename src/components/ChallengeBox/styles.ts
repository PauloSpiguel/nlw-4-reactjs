import styled from "styled-components"

interface ContainerProps {
  isDark: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 100%;

  transition: background 0.2s linear;

  background: ${({ isDark }) => (isDark ? "var(--dark)" : "var(--white)")};
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  .notActive {
    display: flex;
    flex-direction: column;
    align-items: center;

    > strong {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.4;
    }

    > p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      margin-top: 3rem;

      img {
        margin-bottom: 1rem;
      }
    }
  }

  .active {
    height: 100%;
    display: flex;
    flex-direction: column;

    > header {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.2rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid var(--gray-line);
    }

    > main {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > strong {
        font-size: 2rem;
        font-weight: 600;
        color: var(--title);
        margin: 1.5rem 0 1rem;
      }

      > p {
        line-height: 1.5;
      }
    }

    > footer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      > button {
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;
        outline: 0;

        color: var(--white);

        font-size: 1rem;
        font-weight: 600;

        & :focus {
          box-shadow: 0 0 8px rgba(89, 101, 224, 0.5);
        }
      }

      > button.failedButton {
        background: var(--red);
      }

      > button.succeededButton {
        background: var(--green);
      }

      & button:hover {
        filter: brightness(0.9);
      }
    }
  }
`
