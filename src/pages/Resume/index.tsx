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
                    <li><b>Relevant courses: </b>Software Engineering, Data Structures & Algorithms, Database Systems, Computer System Laboratory, Computer Architectures, and Operating System.</li>
                </Field>
                <Field topic="Technical Projects">
                    <div className="mb-3">
                        <h6>Swap pool</h6>
                        <li>Implemented a Decentralized Exchange on Binance Smart Chain Testnet that allows users to trade tokens.</li>
                        <li>Developed smart contracts cloned from Pancakeswap by using Solidity and Truffle to create a trading simulation that users can buy ERC20 tokens, my own crypto tokens.</li>
                        <li><b>Utilizations: </b>Solidity, Web3js, Truffle, JavaScript, ReactJS and Styled-components.</li>

                    </div>

                    <div className="mb-3">
                        <h6>Medproject</h6>
                        <li>Developed smart contracts using Solidity that allow users to store medical records in order to provide users and medical providers capabilities to enrich data.</li>
                        <li><b>Utilizations: Solidity, Web3js, Truffle, JavaScript, ReactJS, Material UI and Styled-components.</b></li>
                    </div>

                    <div className="mb-3">
                        <h6>Cryptoprices</h6>
                        <li>Designed and developed a website that displays cryptocurrency rates of 45 tokens from a Bitkub API.</li>
                        <li>Built a Discord chatbot and a notification service that allows users to set up a token target price then automatically triggers chat messages when the price is reached.</li>
                        <li><b>Utilizations: </b>HTML, CSS, Bootstrap, ReactJS and Styled-components.</li>
                    </div>

                    <div className="mb-3">
                        <h6>Katrade</h6>
                        <li>Designed and developed user interfaces of a trading platform that allows Kasetsart students to trade items in order to reduce waste and create a community that promotes environmental sustainability.</li>
                        <li><b>Utilizations: </b>HTML, CSS, Bootstrap, ReactJS, Styled-components, Axios, Firebase and Material UI.</li>
                    </div>
                </Field>
                <Field topic="Leadership Experiences">
                    <div className="mb-3">
                        <h6>Nutchanon Blog</h6>
                        <li>Wrote Blockchain content to share knowledge in blockchain technology and digital currencies such as Blockchain 101 and Smart Contracts development.</li>
                    </div>
                    <div className="mb-3">
                        <h6>Let Me Tired Camp </h6>
                        <li>Led a team of 3 people to design artworks and posters for a Freshmen Orientation in the Department of Computer Engineering at Kasetsart University, for over 50 high school students.</li>
                    </div>

                </Field>
                <Field topic="Skills">
                    <li><b>Blockchain Development</b>: Solidity, Web3js, JavaScript, Truffle, and Ganache.</li>
                    <li><b>Web Technologies</b>: ReactJS, NextJS, HTML, CSS, and ExpressJS.</li>
                    <li><b>Other programming languages</b>: Typescript, NodeJS, Go, Python, C, and C++.</li>
                    <li><b>Database</b>: Firestore and MongoDB.</li>
                    <li><b>SDKs</b>:  Firebase, LINE APIs, and DiscordJS.</li>
                </Field>

                <div className="my-5 text-center">
                    <p>Last Updated: 23 Oct 2021</p>
                </div>

            </div>

        </>
    )
}