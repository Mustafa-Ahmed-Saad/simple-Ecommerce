import styled from 'styled-components';

export const LoginPageStyled = styled.div`
  #login-form {
    width: max-content;
    margin: 40px auto;
    font-family: 'Segoe UI', sans-serif;
    padding: 25px 28px;
    background: #151414;
    border-radius: 4px;
    border: 1px solid #302d2d;
    width: 500px;
    animation: popup 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  @keyframes popup {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    font-weight: 400;
    color: #e7e7e7;
    border-bottom: 1px solid #313131;
  }

  button {
    padding: 10px 18px;
    font-size: 15px;
    background: #1a3969;
    width: 100%;
    border: none;
    border-radius: 4px;
    color: #f4f4f4;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.9;
    }
    &:focus {
      box-shadow: 0px 0px 0px 3px black;
    }
  }
`;
