import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { FaBitcoin, MdSwapVerticalCircle } from "react-icons/all";
import { hColor } from "../../colors";

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <div className="container my-5 py-5">
                <h3 className="mb-5">Projects</h3>
                <div className="d-flex flex-wrap">
                    <Card 
                        path=""
                        title="Swap"
                        description="Trade tokens in an instant"
                        icon={<MdSwapVerticalCircle size="50px" color={hColor} />}                        
                    />
                    <Card 
                        path=""
                        title="Crypto prices"
                        description="Today cryptocurrency prices"
                        icon={<FaBitcoin size="50px" color={hColor} />}                        
                    />
                    <Card 
                        path=""
                        title="Katrade"
                        description="Trade your items"
                        icon={<MdSwapVerticalCircle size="50px" color={hColor} />}                        
                    />
                </div>
            </div>
        </>
    )
}