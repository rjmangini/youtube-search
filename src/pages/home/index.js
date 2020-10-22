import React, { useState } from "react";

import Container from '@material-ui/core/Container';

import AppBar from "../../components/appBar";
import Header from "../../components/header";
import VideoList from "../../components/videoList";

// <> =  React.Fragment
export default function Home() {
    const [search, setSearch] = useState('');

    return (
        <>
            <AppBar search={search} setSearch={setSearch} />
            <Container>
                <Header text={search || "Faça uma busca..."} />
                <VideoList />
            </Container>
        </>
    )
}
