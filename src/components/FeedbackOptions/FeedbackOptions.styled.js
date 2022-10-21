import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
display: flex;
justify-content: space-around;
padding: 20px;
margin: 0;
list-style:none;
`

export const Buttons= styled.button`
padding: 5px;
border: 2px solid orange;
border-radius: 10px;

:hover, :focus {
    background-color:orange;
    color: white;
}
`