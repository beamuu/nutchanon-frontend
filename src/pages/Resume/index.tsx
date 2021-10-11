import { lightBackground } from "../../colors"
import Navbar from "../../components/Navbar"
import ScreenWidth from "../../components/ScreenWidth"
import Field from "./Field"
import resumebg from "../../images/resumebg.png";
export default function Resume() {
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
                    <h3>Resume</h3>
                    <p>view PDF {">"}</p>
                </div>
            </ScreenWidth>

            <div className="container py-5">
                <Field topic="Education">
                    <h6>Kasetsart University, Bangkok Thailand</h6>
                    <li>Bachelor of Engineering in Computer Engineering</li>
                    <li>GPAX: 2.84/4.00 <b>(from Academic year 2019 - 2020)</b></li>
                    <li>Relevant Coursework: Software Engineering, Abstract Data Types and Problem Solving, Database System</li>
                </Field>
                <Field topic="Skills">
                    <li><b>Blockchain Development</b>: Solidity, web3js, JavaScript</li>
                    <li><b>Web Technologies</b>: ReactJS, NextJS, HTML, CSS, ExpressJS</li>
                    <li><b>Other programming languages</b>: Typescript, NodeJS, Go, Python, C, C++</li>
                    <li><b>Database</b>: Firebase, MongoDB</li>
                </Field>
                <Field topic="Technical Projects">
                    <div className="mb-3">
                        <h6>Swap</h6>
                        <li>Decentralized Exchange on Binance Smart Chain Testnet</li>
                        <li>Using React for building interface to interact with smart contracts.</li>
                    </div>

                    <h6>Cryptoprices</h6>
                    <h6>Katrade</h6>
                </Field>
                <div className="my-5 text-center">
                    <p>Last Updated: 11 Oct 2021</p>
                </div>
            </div>

        </>
    )
}