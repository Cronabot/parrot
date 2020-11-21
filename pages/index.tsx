import React, { FC } from 'react';
import Head from 'next/head';

interface Props {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
}

const index: FC<Props> = () => {
    return (
        <div>
            <Head>
                <title>Parrot</title>
            </Head>
        </div>
    );
};

export default index;
