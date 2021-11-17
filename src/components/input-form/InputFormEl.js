import styled from 'styled-components';

export const InputParent = styled.div`
  &.input-parent {
    display: block;
    margin-bottom: 20px;

    input {
      padding: 10px 8px;
      width: 100%;
      font-size: 16px;
      background: #323131;
      border: none;
      color: #c7c7c7;
      border-radius: 4px;
      outline: none;
      transition: all 0.2s ease;
    }

    input:hover {
      background: #404040;
    }

    input:focus {
      box-shadow: 0px 0px 0px 1px #0087ff;
    }

    label {
      display: block;
      font-size: 16px;
      margin-bottom: 8px;
      color: #a4a4a4;
    }
  }
`;
