import styled from 'styled-components';

interface StylesProps {
  isDark: boolean
}


export const Container = styled.div<StylesProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ isDark })=> isDark ? "rgba(2,3,5,0.8)" : "rgba(242,243,245,0.8)"};

  main {
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;

    background: ${({ isDark})=> isDark ? "var(--dark)": "var(--white)"};
    box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);

    text-align: center;
    position: relative;

  > header {
      font-size: 8.75rem;
      font-weight: 600;
      color: var(--blue);
      background: url("/icons/levelup.svg") no-repeat center;
      background-size: contain;
    }

    > strong {
      font-size: 2.25rem;
      color: var(--title);
    }

    > p {
      font-size: 1.25rem;
      color: var(--text);
      margin-top: 0.25rem;
    }

    > button {
      position: absolute;
      background: none;
      top: 0.5rem;
      right: 0.5rem;
      border: 0;

      font-size: 0px;
    }
  }
`;

