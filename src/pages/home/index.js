import React, { useState } from "react";

import Container from '@material-ui/core/Container';

import AppBar from "../../components/appBar";
import Header from "../../components/header";

// <> =  React.Fragment
export default function Home() {
    const [search, setSearch] = useState('');

    console.log(search);

    return (
        <>
            <AppBar search={search} setSearch={setSearch} />
            <Container>
                <Header text={search || "Procure um vídeo..."} />
                <div>Conteúdo</div>
            </Container>
        </>
    )
}
