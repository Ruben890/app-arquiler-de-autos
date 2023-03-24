import { Cardcars } from "../../Components/card/card";
import Header from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
import "./vehicles.css"
export const Vehicles = () => {
    return (
        <>
            <Header />
            <main className="Vehicles mt-5 ">


                <Cardcars />

            </main>

            <Footer />
        </>
    )
}