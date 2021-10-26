import Box from "./Box";
import swap from "../../images/swap.png";
import mp from "../../images/medprojects.png";
import cp from "../../images/cryptoprices.png";
import ktd from "../../images/katrade.png";
export default function ProjectsBox() {
    return (
        <div className="full-width d-flex justify-content-center align-items-center flex-wrap">
            <Box
                title="Swap"
                backgroundImage={swap}
                link="https://swap.nutchanon.co"
            />
            <Box
                title="Medprojects"
                backgroundImage={mp}
                link="https://medprojects.nutchanon.co"
            />
            <Box 
                title="Cryptoprices"
                backgroundImage={cp}
                link="https://crypto.nutchanon.co"
                />
            <Box 
                title="Katrade"
                backgroundImage={ktd}
                link="https://letskatrade.web.app"
                />
        </div>
    )
}