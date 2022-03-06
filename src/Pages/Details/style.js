import { Typography } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled.div`
margin:5% auto;
  display: flex;
  
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px;
  border-radius: 15px;
  box-shadow: 0 0 1px white;
`;

export const StyledCard = styled.div`
  width: 25vw;
  color: white;
  padding:20px 40px;
`;


export const StyledTypography = styled(Typography)`
color
`
