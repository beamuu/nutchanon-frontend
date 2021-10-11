import { useHistory } from "react-router";
import styled from "styled-components";
import { color, mainColor } from "../colors";
import brand from "../images/logo.png";

const Menu = styled.p`
    margin: 0px 14px;
    color: ${color};
    cursor: pointer;
    &:hover {
        color: ${mainColor};
    }
`

export default function Navbar() {
    const history = useHistory();
    return (
        <div className="container d-flex align-items-center justify-content-between py-3">
            <div onClick={() => history.push("/")} style={{ cursor: "pointer"}}>
                <h5 style={{ color: mainColor}}><img src={brand} height="26px" className="me-2"/>nutchanon</h5>
            </div>
            <div className="d-flex">
                <Menu onClick={() => history.push("/resume")}>Resume</Menu>
                <Menu>CV</Menu>
                <Menu>Github</Menu>
                <Menu>Contact</Menu>         
            </div>
        </div>
    )
}