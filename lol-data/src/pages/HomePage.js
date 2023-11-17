import React from "react";
import Footer from "../components/Footer/Footer";
import Champion from "../components/Champion/Champion";

const HomePage = () => {
    return(
        <>
            <Champion  championId={'Ezreal'}/>
            <Footer />
        </>
    )
}

export default HomePage;