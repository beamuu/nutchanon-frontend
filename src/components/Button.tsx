import styled from "styled-components";
import { mainColor } from "../colors";

const Button: any = styled.button`
    color: ${(props: any) => props.color ? props.color : "#fff"};
    background-color: ${(props: any) => props.backgroundColor ? props.backgroundColor : mainColor};
    height: 40px;
    padding: 0 20px;
    border: none;
    border-radius: 4px;
    margin: 10px;
    margin-left: 0;
`

export default Button;