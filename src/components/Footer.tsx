import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillPhone, AiOutlineInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { hColor } from "../colors";

export default function Footer() {
    return (
        <div className="d-flex justify-content-center my-5">
                <a 
                    href="https://github.com/nutchanonc"
                    target="_blank"
                    ><AiFillGithub className="mx-3" size="30px" color={hColor} /></a>


                <a
                    href="https://www.facebook.com/beammnc/"
                    target="_blank"
                    ><AiFillFacebook className="mx-3" size="30px" color={hColor} /></a>


                <a
                    href="https://www.instagram.com/beamuuuu/"
                    target="_blank"
                ><AiOutlineInstagram className="mx-3" size="30px" color={hColor} /></a>

                <a
                    href="https://www.linkedin.com/in/nutchanonc/"
                    target="_blank"
                ><AiFillLinkedin className="mx-3" size="30px" color={hColor} /></a>


                <a 
                    href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxblKSQJrSfvSvLpRhxdKTqgFcPwknmGqFSPLpzXQhqSpckhnqdRHMpBpZKJhJbSLg"
                    target="_blank"
                    ><SiGmail className="mx-3" size="30px" color={hColor} /></a>


                <AiFillPhone className="mx-3 pointer" size="30px" color={hColor} onClick={() => window.open("tel:0924373999")}/>
            </div>
    )
}