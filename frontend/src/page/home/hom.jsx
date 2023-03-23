import React from "react";
import { Cardcars } from "../../Components/card/card";
import { Footer } from "../../Components/footer/footer";
import Header from "../../Components/header/header";

const Home = () => {
    return (
        <>
            <Header />
            <main className="container">
               <Cardcars/>
            </main>
            <Footer />

        </>
    )
}
export default Home