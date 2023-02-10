import React, {useEffect, useState} from "react";
import axios from "axios";
import "./HomePage.css";
import SearchBar from "../../components/searchbar/SearchBar";
import FormatDate from "../../helpers/FormatDate";


// const apiKey = process.env.OVIO_API_KEY;

function HomePage() {
    const [carData, setCarData] = useState({});
    const [kenteken, setKenteken] = useState("6-XXH-68");

    // useEffect(() => {
    //     fetchData();
    // }, []);

    useEffect(() => {
        if (kenteken) {
            fetchData();
        }
    }, [kenteken]);

    async function fetchData() {

        try {
            const response = await axios.get(`https://api.overheid.io/voertuiggegevens/${kenteken}`, {
                mode: "onSubmit",
                headers: {
                    "Content-Type": "application/json",
                    "ovio-api-key": "d34842dc4ab353fd52eb5bacccfcca8c4c9fdf5b06fe4e95073642e3566de88c",
                }
            });
            setCarData(response.data);
            // setDate(carData.datum_eerste_toelating);
            // console.log(date.split("-"));
            console.log(response.data);
            console.log("Trade name:", response.data.merk, response.data.handelsbenaming);
            console.log("First admission:", response.data.datum_eerste_toelating);
            console.log("Fuel description:", response.data.brandstof[0].brandstof_omschrijving);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="outer-container">
            <header className="inner-container">
                <div>
                    <h1>Please enter your license plate number</h1>
                    <SearchBar setKentekenHandler={setKenteken}/>
                </div>
            </header>
            <main className="inner-container">
                {Object.keys(carData).length > 0 &&
                    <>
                        <h4>trade name</h4>
                        <h2>{carData.merk} {carData.handelsbenaming}</h2>
                        <h4>date of first admission</h4>
                        <h2>{FormatDate(carData.datum_eerste_toelating)}</h2>
                        <h4>fuel description</h4>
                        <h2>{carData.brandstof[0].brandstof_omschrijving}</h2>
                    </>
                }
            </main>
            <footer className="inner-container">


            </footer>

        </div>
    )
}

export default HomePage;