import styled from "styled-components";

export const Form = styled.form`
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  margin: 10rem auto;
  background-color: var(--gray-900);
  border-radius: 1rem;
  border: 1px solid var(--secondary);

  h1 {
    font-family: sans-serif;
    color: var(--secondary);
  }

  .subtext {
    position: relative;
    bottom: 2rem;
    font-family: sans-serif;
    color: var(--thirdy);
    opacity: 0.8;
  }

  .inputs {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: flex-start;

    label {
      margin-bottom: 10px;
      margin-top: 10px;
      font-weight: bold;
      color: var(--secondary);
      font-family: sans-serif;
    }

    input {
      width: 16rem;
      padding: .6rem;
      color: var(--gray-100);
      background: transparent;
      border-radius: .6rem;
      border: 1px solid var(--secondary);
      font-family: sans-serif;
      margin-bottom: 12px;
      transition: all 0.5s;

      &:hover {
        filter: brightness(0.7);
      }
    }

  }

  button {
    width: 17.5rem;
    padding: .6rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: .6rem;
    border: none;
    background: var(--secondary);
    color: var(--gray-100);
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  .createUser {
    color: var(--gray-300);
    font-family: sans-serif;

    a {
      font-family: sans-serif;
      margin-left: 5px;
      color: var(--thirdy);
      text-decoration: none;
      font-weight: 800;
      transition: all 0.5s;

      &:hover {
        filter: brightness(0.7);
      }
  }
` 