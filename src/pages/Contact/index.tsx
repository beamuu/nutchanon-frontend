import { Helmet } from "react-helmet";
import { lightBackground } from "../../colors";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ScreenWidth from "../../components/ScreenWidth";



export default function Contact() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Contact me</title>
            </Helmet>
            <ScreenWidth 
                style={{
                    minHeight: "83vh"
                }} 
                className="d-flex align-items-center justify-content-center"
                >
                <Footer />
            </ScreenWidth>
        </>
    )
}