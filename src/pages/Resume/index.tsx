import { lightBackground } from "../../colors"
import Navbar from "../../components/Navbar"
import ScreenWidth from "../../components/ScreenWidth"
import Field from "./Field"
import resumebg from "../../images/resumebg.png";
import { Helmet } from "react-helmet";
export default function Resume() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Resume</title>
            </Helmet>
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
                    <li>GPAX: 2.84/4.00 <b>(from academic year 2019 - 2020)</b></li>
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
                        <li>A Decentralized Exchange on Binance Smart Chain Testnet.</li>
                        <li>Smart contracts are clonned from Pancakeswap.</li>
                        <li>Create new ERC20 (BEP20) Tokens for trading inside this DEX.</li>
                        <li>All ERC20 (BEP20) Tokens was created by using OpenZeppelin.</li>
                        <li>Use React for building interface to interact with smart contracts.</li>
                        <li>Responsibility: all</li>

                    </div>

                    <div className="mb-3">
                        <h6>Medproject</h6>
                        <li>The implementation of blockchain to the medical technologies.</li>
                        <li>This project runs on Binance Smart Chain.</li>
                        <li>Store the medical records on the blockchain which can access from anywhere on earth.</li>
                        <li>Medproject's smart contracts can create a hospital contract that let their patients to interact with.</li>
                        <li>Patients can create a profile on the hospital's contract and store their medical records which will be added by the hospital.</li>
                        <li>Privacy is very important. You can set who can access to each records.</li>
                        <li>Using React for building interface to interact with smart contracts.</li>
                        <li>Responsibility: all</li>
                    </div>

                    <div className="mb-3">
                        <h6>Cryptoprices</h6>
                        <li>A website for reporting today's cryptocurrency prices.</li>
                        <li>Cryptocurrency prices are taken from Bitkub API.</li>
                        <li>Use React for building interfaces.</li>
                        <li>Responsibility: all</li>
                    </div>

                    <div className="mb-3">
                        <h6>Katrade</h6>
                        <li>Items trading platform for Kasetsart Unversity students</li>
                        <li>Trading platform with a matching system to  match the exact item with its preferred requirements</li>
                        <li>Using React for building interfaces</li>
                        <li>Responsibility: frontend development</li>
                    </div>
                </Field>
                <div className="my-5 text-center">
                    <p>Last Updated: 16 Oct 2021</p>
                </div>
            </div>

        </>
    )
}