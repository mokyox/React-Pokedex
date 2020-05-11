import React, { useState } from "react";
import PokemonList from "./PokemonList/PokemonList";
import { GlobalStyle } from "../styles/global/index";
import Navbar from "./Navbar/Navbar";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <GlobalStyle />
            <div className="container">
                <Navbar searchChange={searchChange} />
                <PokemonList searchTerm={searchTerm} />
            </div>
        </>
    );
};

export default App;
