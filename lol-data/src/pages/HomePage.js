import React from "react";
import Footer from "../components/Footer/Footer";
import Champion from "../components/Champion/Champion";

const HomePage = () => {
    return(
        <>
            <Champion  championId={'Diana'}/>
            <Footer />
        </>
    )
}

export default HomePage;