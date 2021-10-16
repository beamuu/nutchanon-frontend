import styled from "styled-components";
import { color, mainColor } from "../../colors";

const Topic = styled.p`
    color: ${color};
    margin: 10px 0;
    cursor: pointer;
    &:hover {
        color: ${mainColor};
    }
`
export default Topic;