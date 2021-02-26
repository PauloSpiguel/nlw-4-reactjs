import styled from "styled-components"

interface ContainerProps {
  isDark: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  transition: background 0.2s linear;

  background: ${({ isDark }) => (isDark ? "var(--dark)" : "var(--gray-line)")};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.05);

  > img {
    height: 6rem;
    width: 6rem;
  }

  > nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    > img {
      height: 2rem;

      &:hover {
        filter: brightness(0.9);
      }
    }

    svg {
      font-size: 2rem;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
