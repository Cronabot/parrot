import React, { FC } from 'react';
import Head from 'next/head';
import GenerateLink from '../components/GenerateLink';
import { Container } from 'react-bootstrap';

interface Props {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
}

const index: FC<Props> = () => {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#343A40' }}>
            <Head>
                <title>Parrot</title>
            </Head>
            <Container style={{ paddingTop: '20vh' }}>
                <GenerateLink />
            </Container>
        </div>
    );
};

export default index;
