import { styled } from "styled-components";

const StyledContainer = styled.div`
    width: 65%;
    margin: auto;
    height: 100vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
`;

const StyledTitle = styled.div`
    width: 525px;
`;

const StyledH1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 50px;
    font-weight: 600;
    color: white;
    line-height: 50px;
    padding-bottom: 40px;
`;

const StyledP = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: white;
`;

const StyledFormCont = styled.div`
    width: 540px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const StyledAd = styled.div`
    width: 500px;
    background-color: #5E54A4;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
`;

const StyledAdH2 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: white;
    text-align: center;
`;

const StyledAdSpan = styled.span`
    font-weight: 600;
`;

const StyledForm = styled.form`
    width: 100%;
    display: grid;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 45px 0;
`;

const StyledInputCont = styled.div`
    width: 445px;
`;

const StyledInput = styled.input`
    width: 445px;
    border-radius: 10px;
    padding: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: black;
    outline: none;
    border: 2px solid gray;
    transition: 0.3s ease all;
    margin: 10px 0;

    &::placeholder {
        color: gray;
    }
    &:focus {
        border: 2px solid #5E54A4;
    }
    &.error {
        border: 2px solid red;
    }
`;

const StyledSubmit = styled.input`
    width: 479px;
    border-radius: 10px;
    padding: 15px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: white;
    background-color: #38CC8B;
    outline: none;
    border: 0;
    cursor: pointer;
    transition: 0.3s ease all;
    margin-top: 20px;
    
    &:hover {
        background-color: #77E2B3;
    }
`;

const StyledTerms = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: #BAB7D4;
    text-align: center;
    margin-top: 20px;
`;

const StyledTermsSpan = styled.span`
    color: #FF7979;
    font-weight: 600;
    cursor: pointer;
`;
const StyledErrorCont = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
`;
const StyledError = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: red;
    text-align: end;
    font-style: italic;
`;

const StyledImg = styled.img`
    width: 20px;
    height: 20px;
`;

export {StyledContainer, StyledTitle, StyledH1, StyledP, StyledFormCont, StyledAd, StyledAdH2, StyledAdSpan, StyledForm, StyledInputCont, StyledInput, StyledSubmit, StyledTerms, StyledTermsSpan, StyledErrorCont, StyledError, StyledImg}