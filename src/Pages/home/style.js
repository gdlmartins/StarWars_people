import styled from 'styled-components';



export const StyledGrid = styled.div`
display:grid;
margin: 1rem auto;
grid-template-columns:  1fr 1fr 1fr 1fr;
width: 92%; 

@media(max-width:1000px){
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 5px auto;
    width: 100%; 
}

@media(max-width:910px){
    display: grid;
    grid-template-columns: 1fr 1fr;
       margin: 5px auto;
    width: 70%; 
}

@media(max-width:620px){
    display: grid;
    grid-template-columns: 1fr;
    justify-content:center;
    align-items:center;
    margin: 5px auto;
    width: 50%; 
}
`
export const StyledCard = styled.div`
width: 300px;
height: 380px;
`