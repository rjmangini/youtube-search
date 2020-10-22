import React from "react";

import Container from '@material-ui/core/Container';

import AppBar from "../../components/appBar";
import Header from "../../components/header";

// <> =  React.Fragment
export default function Home() {
    return (
        <>
            <AppBar />
            <Container>
                <Header text="Texto" />
                <div>Conteúdo</div>
            </Container>
        </>
    )
}
