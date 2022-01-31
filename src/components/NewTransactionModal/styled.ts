import styled from 'styled-components';
import { darken } from 'polished';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.form`
    
    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;
      border: 1px solid;
      background: #e7e9ee;
      font-weight: 400;
      font-size: 1rem;

      &::placeholder {
        color: var(--text-body);
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type='submit'] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: var(--green);
      color: #FFF;
      border-radius: 0.25rem;
      border: none;
      font-size: 1rem;
      margin-top: 1.5rem;
      font-weight: 400;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `,

  TransactionTypeContainer: styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;    
  `,

  RadioBox: styled.button<{isActive: boolean}>`
    height: 4rem;
    border: 1ps solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${({isActive}) => isActive ? '#ccc' : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 20px;
      height: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  `,
}
