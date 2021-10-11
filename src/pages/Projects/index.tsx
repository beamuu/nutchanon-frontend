import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { FaBitcoin, MdSwapVerticalCircle } from "react-icons/all";
import { dimmedMainColor, hColor, lightBackground, mainColor } from "../../colors";
import ScreenWidth from "../../components/ScreenWidth";
import Contents from "./Contents";
import Topic from "./Topic";

export default function ProjectsPage() {
    return (
        <>

            <Navbar />
            <ScreenWidth style={{ backgroundColor: lightBackground }}>
                <div className="container mb-5 py-5">
                    <h4 className="mb-5">My Projects</h4>
                    <div className="d-flex flex-wrap">
                        <Card
                            path=""
                            title="Swap"
                            icon={<MdSwapVerticalCircle size="50px" color={dimmedMainColor} />}
                            description="Trade tokens in an instant"
                        />
                        <Card
                            path=""
                            title="Cryptoprices"
                            icon={<FaBitcoin size="50px" color={dimmedMainColor} />}
                            description="Today's cryptocurrency prices"
                        />
                        <Card
                            path=""
                            title="Katrade"
                            icon={<MdSwapVerticalCircle size="50px" color={dimmedMainColor} />}
                            description="Trade your items with others"
                        />
                    </div>
                </div>
            </ScreenWidth>
            <div className="container">
                <div className="row m-0">
                    <div className="col-2 px-5">
                        <h6>Projects</h6>
                        <hr />
                        <Topic>Swap</Topic>
                        <Topic>Cryptoprices</Topic>
                        <Topic>Katrade</Topic>
                    </div>
                    <div className="col-10">
                        <Contents />
                    </div>
                </div>
            </div>

        </>
    )
}