import { useState } from "react";
import { lightBackground } from "../../colors"
import Navbar from "../../components/Navbar"
import ScreenWidth from "../../components/ScreenWidth"
import resumebg from "../../images/resumebg.png";
import Topic from "../Projects/Topic";
import SkillContents from "./SkillContents";
export default function SkillsPage() {

    const [view, setView] = useState("");
    // const databaseContent: any = document.getElementById("skills-blockchain");

    return (
        <>
            <Navbar />

            <ScreenWidth
                className="d-flex align-items-center"
                style={{
                    background: lightBackground,
                    minHeight: "300px",
                    backgroundImage: `url(${resumebg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="container">
                    <h3>My Technical Skills</h3>
                    <p>view PDF {">"}</p>
                </div>
            </ScreenWidth>

            <div className="container py-5">
                <div className="row m-0">
                    <div className="col-lg-3 px-3">
                        <div className="sticky pt-5">
                            <h6>Technical</h6>
                            <hr />
                            <Topic onClick={() => setView("skills-blockchain")}>Blockchain</Topic>
                            <Topic onClick={() => setView("skills-frontend")}>Frontend</Topic>
                            <Topic onClick={() => setView("skills-backend")}>Backend</Topic>
                            <Topic onClick={() => setView("skills-database")}>Database System</Topic>
                            <Topic onClick={() => setView("skills-prog")}>Programming Languages</Topic>
                            <Topic onClick={() => setView("skills-sdks")}>Other SDKs</Topic>

                            <h6 className="mt-5">Communication</h6>
                            <hr />
                            <Topic onClick={() => setView("skills-blockchain")}>English</Topic>
                            <Topic onClick={() => setView("skills-blockchain")}>Thai</Topic>
                        </div>
                    </div>
                    <div className="col-lg-9 content-border">
                        <SkillContents scrollTo={view}/>
                    </div>
                </div>
            </div>

        </>
    )
}