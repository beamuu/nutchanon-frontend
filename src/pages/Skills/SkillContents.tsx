import { useEffect } from "react";
import { DiReact } from "react-icons/di";
import Card from "../../components/Card";
import clang from "../../images/c.png";

interface ISkillContents {
    scrollTo?: string; 
}

export default function SkillContents({ scrollTo }: ISkillContents) {

    const scrollToElement = (to: string) => {
        const target: any = document.getElementById(to);
        target.scrollIntoView();
    }

    useEffect(() => {
        if (scrollTo) {
            scrollToElement(scrollTo);
        }
    }, [scrollTo]);

    return (
        <div>
            <div className="my-5" id="skills-blockchain">
                <h4>Blockchain Development</h4>
                <li>Create smart contracts for Decentralized Applications (dApps)</li>
                <li>Interract with smart contracts by using web3.js</li>
                <li>Solidity</li>
                <div className="my-5">
                    <h6>Tools</h6>
                    <div className="d-flex overflow-auto">
                        <Card
                            title="Solidity"
                            icon={<img src="https://iconape.com/wp-content/files/uq/93481/svg/solidity.svg" height="30px" />}
                            description="A high-level language for implementing smart contracts on Ethereum and more."
                        />

                        <Card
                            title="Web3.js"
                            icon={<img src="http://larslai.github.io/onlinePresentation/images/skills/web3js.png" height="30px" />}
                            description="Ethereum JavaScript API."
                        />
                        <Card
                            title="Truffle"
                            icon={<img src="https://ichi.pro/assets/images/max/724/1*P-T7USHsmPYOSBorXAqXYA.png" height="30px" />}
                            description="Development environment, testing framework and asset pipeline for blockchains."
                        />
                        <Card
                            title="Ganache"
                            icon={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VgNhP1A0wkrHPmYn6RWokpJTIMqQLOcv8JDS1L8Y-ojRWey6F57g9Bn1FmFnziE_doQ&usqp=CAU" height="30px" />}
                            description="A personal blockchain for Ethereum development."
                        />
                    </div>
                </div>
            </div>

            <div className="my-5" id="skills-frontend">
                <h4>Frontend Development</h4>
                <li>Create user interfaces</li>
                <div className="my-5">
                    <h6>Tools</h6>
                    <div className="d-flex overflow-auto">
                        <Card
                            title="React"
                            icon={<DiReact size="30px" />}
                            description="JavaScript library for creating user interfaces."
                        />

                        <Card
                            title="Next.js"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" height="30px" />}
                            description="React framework for creating user interfaces."
                        />
                        <Card
                            title="HTML"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" height="30px" />}
                            description="React framework for creating user interfaces."
                        />
                        <Card
                            title="CSS"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" height="30px" />}
                            description="React framework for creating user interfaces."
                        />
                    </div>
                </div>
            </div>

            <div className="my-5" id="skills-backend">
                <h4>Backend Development</h4>
                <li>Create APIs</li>
                <div className="my-5">
                    <h6>Tools</h6>
                    <div className="d-flex overflow-auto">
                        <Card
                            title="Express"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="30px" />}
                            description="Node.js web application framework"
                        />
                        
                    </div>
                </div>
            </div>

            <div className="my-5" id="skills-programming-language">
                <h4>Datbase System</h4>

                <div className="my-5">
                    <h6>Tools</h6>
                    <div className="d-flex overflow-auto">
                        <Card
                            title="MongoDB"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" height="30px" />}
                            description="Node.js web application framework"
                        />
                        
                    </div>
                </div>
            </div>

            <div className="my-5" id="skills-sdks">
                <h4>Programming Languages</h4>

                <div className="my-5">
                    <h6>Tools</h6>
                    <div className="d-flex overflow-auto">
                        <Card
                            title="TypeScript"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" height="30px" />}
                        />
                        <Card
                            title="Node.js"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1200px-Node.js_logo_2015.svg.png" height="30px" />}
                        />
                        <Card
                            title="JavaScript"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" height="30px" />}
                        />
                        <Card
                            title="Python"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1200px-Python_logo_and_wordmark.svg.png" height="30px" />}
                        />
                        <Card
                            title="Go"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png" height="30px" />}
                            
                        />
                        <Card
                            title="C"
                            icon={<img src={clang} height="30px" />}
                            
                        />
                        <Card
                            title="C++"
                            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" height="30px" />}
                            
                        />
                        <Card
                            title="Solidity"
                            icon={<img src="https://iconape.com/wp-content/files/uq/93481/svg/solidity.svg" height="30px" />}
                            
                        />
                        
                    </div>
                </div>
            </div>

            <div className="my-5" id="skills-sdks">
                <h4>Other SDKs</h4>

                <div className="my-5">
                    <h6>Tools</h6>
                    <div className="d-flex overflow-auto">
                        <Card
                            title="Firebase"
                            icon={<img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" height="30px" />}
                        />
                        <Card
                            title="LINE Login"
                            icon={<img src="https://developers.line.biz/assets/ogtags/twitter-ogtag.jpg" height="30px" />}
                        />
                        <Card
                            title="LINE Messaging API"
                            icon={<img src="https://developers.line.biz/assets/ogtags/twitter-ogtag.jpg" height="30px" />}
                        />
                        <Card
                            title="Discord.js"
                            icon={<img src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ" height="30px" />}
                        />
                        
                    </div>
                </div>
            </div>

        </div>
    )
}