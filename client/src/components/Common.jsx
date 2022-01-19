import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background: #white;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const MutedLink = styled.a`
  color: rgba(170, 170, 170, 1);
  font-size: 11px;
  font-weight: 500;
  margin: 10px 0;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  color: #5963c3;
  font-weight: 600;
  font-size: 11px;
  text-decoration: none;
  margin: 0 3px;
`;

export const Input = styled.input`
  width: 500px;
  height: 32px;
  outline: none;
  border: #black solid 1px;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid #black;
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid black;
  }
  &:focus {
    outline: none;
    //box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #black;
  }
`;

export const SubmitButton = styled.button`
  padding: 6px 1em;
  width: 30%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #38B6FF; /* fallback for old browsers */
  background: #38B6FF
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: #38B6FF
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #707070;
    color: #fff;
`;