import Navbar from "../../components/Navbar";
import Blob from "../../components/Blob";
import Button from "../../components/Button";
import ScreenWidth from "../../components/ScreenWidth";
import { hColor, iconColor, lightBackground, mainColor } from "../../colors";
import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiOutlineLaptop, GiBookshelf, AiFillCode, SiGmail, AiFillPhone } from "react-icons/all";
import Card from "../../components/Card";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row m-0 mt-5">
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <Blob />
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <div>
                            <h3 className="mb-3">Nutchanon Chantrasup</h3>
                            <p>Computer Engineering Student, Kasetsart University, Bangkok.</p>
                            <Button>About me</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ScreenWidth style={{ background: lightBackground, minHeight: "500px", padding: "70px 0" }}>
                <div className="container">

                    <div className="row m-0">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                            <img src="https://mystickermania.com/cdn/stickers/memes/sticker_2110-512x512.png"width="300px"/>
                        </div>
                        <div className="col-lg-8">
                            <h4>Learn more about me</h4>
                            <div className="d-flex py-5 overflow-auto">
                                <Card path="" title="Skills" icon={<AiOutlineLaptop size="50px" color={hColor}/>} />
                                <Card path="" title="Education" icon={<GiBookshelf size="50px" color={hColor}/>} />
                                <Card path="/projects" title="Projects" icon={<AiFillCode size="50px" color={hColor}/>}  />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </ScreenWidth>
            <div className="d-flex justify-content-center my-5">
                <AiFillGithub className="mx-3" size="30px" color={hColor} />
                <AiFillFacebook className="mx-3" size="30px" color={hColor} />
                <AiOutlineInstagram className="mx-3" size="30px" color={hColor} />
                <AiFillLinkedin className="mx-3" size="30px" color={hColor} />
                <a 
                    href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxblKSQJrSfvSvLpRhxdKTqgFcPwknmGqFSPLpzXQhqSpckhnqdRHMpBpZKJhJbSLg"
                    target="_blank"
                    ><SiGmail className="mx-3" size="30px" color={hColor} /></a>
                <AiFillPhone className="mx-3" size="30px" color={hColor} />
            </div>
        </>
    )
}