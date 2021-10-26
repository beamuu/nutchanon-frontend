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
        <div className="container d-flex align-items-center justify-content-between py-3 navbar">
            <div onClick={() => history.push("/")} style={{ cursor: "pointer"}}>
                <h5 style={{ color: mainColor}}><img src={brand} height="26px" className="me-2"/>nutchanon</h5>
            </div>
            <div className="d-flex navbar-menu">
                <Menu onClick={() => history.push("/resume")}>Resume</Menu>
                {/* <Menu>CV</Menu> */}
                <a href="https://github.com/nutchanonc" target="_blank" className="text-decoration-none"><Menu>Github</Menu></a>
                <Menu onClick={() => history.push("/contact")}>Contact</Menu>         
            </div>
        </div>
    )
}