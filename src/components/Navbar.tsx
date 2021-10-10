import styled from "styled-components";
import { color, hColor } from "../colors";


const Menu = styled.p`
    margin: 0px 14px;
    color: ${color};
`

export default function Navbar() {
    return (
        <div className="container d-flex align-items-center justify-content-between py-3">
            <div>
                <h5 style={{ color: hColor}}>nutchanon</h5>
            </div>
            <div className="d-flex">
                <Menu>CV</Menu>
                <Menu>Github</Menu>
                <Menu>Contact</Menu>         
            </div>
        </div>
    )
}