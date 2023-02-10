import React, {useState} from "react";
import axios from "axios";
import "./HomePage.css";


// const apiKey = process.env.OVIO_API_KEY;

function HomePage() {
    const [search, setSearch] = useState("");

    async function fetchData() {

        try {
            const response = await axios.get(`https://api.overheid.io/voertuiggegevens?ovio-api-key=d34842dc4ab353fd52eb5bacccfcca8c4c9fdf5b06fe4e95073642e3566de88c`, {
                mode: "onSubmit",
                headers: {
                    "Content-Type": "application/json",
                }, params: {
                    query: search,
                }
            });
            console.log(search);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="outer-container">
            <header className="inner-container">
                <div>
                    <h1>Please enter your license plate number</h1>
                    <form onSubmit={fetchData}>
                        <input type="search"/>
                        <button type="submit">
                            send
                        </button>
                    </form>
                </div>
            </header>
            <main className="inner-container">
                <h4>trade name</h4>
                <h2>volkswagen golf</h2>
                <h4>date of first admission</h4>
                <h2>09-12-2013</h2>
                <h4>fuel description</h4>
                <h2>diesel</h2>
            </main>
            <footer className="inner-container">


            </footer>
            <button type='button' onClick={fetchData}>
                Haal Data Op!
            </button>
        </div>
    )
}

export default HomePage;