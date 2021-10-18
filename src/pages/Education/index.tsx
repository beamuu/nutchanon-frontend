import { Helmet } from "react-helmet";
import styled from "styled-components";
import { lightBackground, mainColor } from "../../colors";
import Navbar from "../../components/Navbar";
import ScreenWidth from "../../components/ScreenWidth";
import resumebg from "../../images/resumebg.png";


export default function Education() {
    return (
        <>
            <Navbar />
            <Helmet>
                <title>Education</title>
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
                    <h3>Education</h3>
                </div>
            </ScreenWidth>
            <ScreenWidth>
                <div className="container py-5">
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwNs1KMjRg9BLJTixOLSlOLCpRKM3LLEstKs4sqQQAqfkLVw&q=kasetsart+university&rlz=1C1SQJL_enTH907TH907&oq=kasets&aqs=chrome.1.69i57j46i433i512j0i512j46i512j0i512j46i175i199i512j0i512j69i61.1904j0j9&sourceid=chrome&ie=UTF-8" target="_blank" style={{ textDecoration: "none"}}><h5>Kasetsart University</h5></a>
                    <p style={{ fontSize: "13px" }}>Bangkok, Thailand</p>
                    <p className="mt-3">Bachelor of Engineering in Computer Engineering</p>
                    <li style={{ fontSize: "13px" }}>August 2019 - May 2023</li>

                    <hr className="my-5"></hr>

                    <a href="https://www.google.com/search?q=saint+gabriel%27s+college&rlz=1C1SQJL_enTH907TH907&sxsrf=AOaemvLH7RTawwh5QJeUnSqEh7Zz0wwWAw%3A1634583094314&ei=NsJtYfTWEvyN4-EPzu2i0Ac&gs_ssp=eJzj4tLP1TcwKkw3sjA2YLRSNagwNkg1srQ0TUuxSLY0MjM3tjKoSDFNMTAzTrZMMbNISUyzTPESL07MzCtRSE9MKspMzVEvVkjOz8lJTU8FABv6Frk&oq=saint+gabriel%27s+college&gs_lcp=Cgdnd3Mtd2l6EAMYADIOCC4QxwEQrwEQkQIQkwIyBQgAEJECMgQILhBDMgQILhBDMgoILhDHARCvARBDMgQILhBDMgoILhDHARCvARBDMgQILhBDMg4ILhCABBCxAxDHARCjAjILCC4QgAQQxwEQrwE6BAgjECc6CgguEMcBENEDEEM6BAgAEEM6CwguEMcBEK8BEJECOgsIABCABBCxAxCDAToICAAQgAQQsQNKBAhBGABQ5l5Y2GBg2mhoAHACeACAAW6IAYkDkgEDMS4zmAEAoAEBwAEB&sclient=gws-wiz" target="_blank" style={{ textDecoration: "none"}}><h5>Saint Gabriel's College</h5></a>
                    <p style={{ fontSize: "13px" }}>Bangkok, Thailand</p>
                    <p className="mt-3">High School Diploma</p>
                    <li style={{ fontSize: "13px" }}>May 2016 - Feb 2019</li>
                </div>
            </ScreenWidth>
        </>

    )
}