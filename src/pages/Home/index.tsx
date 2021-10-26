import Navbar from "../../components/Navbar";
import Blob from "../../components/Blob";
import Button from "../../components/Button";
import ScreenWidth from "../../components/ScreenWidth";
import { hColor, iconColor, lightBackground, mainColor } from "../../colors";
import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiOutlineLaptop, GiBookshelf, AiFillCode, SiGmail, AiFillPhone, BiBookContent } from "react-icons/all";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import ProjectsBox from "./ProjectsBox";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const SecretText = styled.p`
    cursor: pointer;
    transition: 300ms ease;
    padding: 8px 15px;
    border-radius: 7px;
    &:hover {
        color: ${mainColor};
        transform: scale(1.1);
        background-color: #f5f5f5;
    }
`

const DogeContainer = styled.div`
    width: 100%;
    position: relative;
    min-height: 700px;
    background-image: url(https://media.giphy.com/media/dSgYBRG11Xk8VZdsKw/giphy.gif);
    backgroung-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const Secret = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
`

export default function Home() {
    const [secret, setSecret] = useState(false);
    const history = useHistory();
    const toMedium = () => {
        window.location.href = "https://nutchanonc.medium.com";
    }
    const handleSecretReveal = () => {
        document.getElementById("secret")?.scrollIntoView();
        setSecret(true);
    }
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
                            <Button onClick={() => history.push("/contact")}>Contact me</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ScreenWidth style={{ background: lightBackground, minHeight: "500px", padding: "70px 0" }}>
                <div className="container">

                    <div className="row m-0">
                        <div className="col-lg-4 d-flex justify-content-center align-items-center">
                            <img src="https://mystickermania.com/cdn/stickers/memes/sticker_2110-512x512.png" width="300px" />
                        </div>
                        <div className="col-lg-8">
                            <h4>Find the perfect topics about me</h4>
                            <div className="d-flex py-5 overflow-auto">
                                <Card
                                    path="/skills"
                                    title="Skills"
                                    icon={<AiOutlineLaptop size="50px" color={hColor} />}
                                    description="Blockchain, Smart Contracts, Web development and more"
                                />
                                <Card
                                    path="/education"
                                    title="Education"
                                    icon={<GiBookshelf size="50px" color={hColor} />}
                                    description=""
                                />
                                <Card
                                    path="/projects"
                                    title="Projects"
                                    icon={<AiFillCode size="50px" color={hColor} />}
                                    description="My past projects include both personal and educational projects."
                                />
                                <Card
                                    onClick={toMedium}
                                    title="Blogs"
                                    icon={<BiBookContent size="50px" color={hColor} />}
                                    description="My blogs about software development, lifestyles and more."
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </ScreenWidth>
            <ScreenWidth style={{ minHeight: "500px", padding: "70px 0" }}>
                <div className="container">
                    <div className="text-center">
                        <h4 className="mb-5">My past projects</h4>
                        <div className="mb-5">
                            <ProjectsBox />
                        </div>
                        <div className="text-center">
                            <a href="https://github.com/nutchanonc"><Button>More on GitHub {">"}</Button></a>
                        </div>
                    </div>
                </div>
            </ScreenWidth>

            <ScreenWidth id="secret">
                {
                    !secret ? (
                        <div className="d-flex justify-content-center">
                            <SecretText onClick={handleSecretReveal}>Click to see the Secret of Life</SecretText>
                        </div>
                    ) :
                        (
                            <DogeContainer>
                                <Secret>
                                    <div className="text-center">
                                        <h1 className="text-white">Secret of Life</h1>
                                        <p className="text-white">BUY DOGECOIN | HODL | TO THE MOON</p>
                                    </div>
                                </Secret>
                            </DogeContainer>
                        )
                }
            </ScreenWidth>

            <Footer />
        </>
    )
}