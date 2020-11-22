import { GetServerSideProps } from 'next';
import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import fire from '../../config/fire-config';
import { DocumentData } from '@firebase/firestore';

interface Props {
    data: DocumentData;
}

const LinkId: FC<Props> = ({ data }) => {
    const router = useRouter();
    useEffect(() => {
        router.push('/');
    });
    return (
        <div>
            <Head>
                <meta property='og:title' content={data.title} key='title' />
                <meta property='og:description' content={data.description} key='description' />
                <meta property='og:image' itemProp='image' content={data.image} key='image' />
                <meta property='og:type' content='website' />
            </Head>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let doc = await fire.firestore().collection('links').doc(`${ctx.params.id}`);
    let data = null;
    if (doc) data = await (await doc.get()).data();
    return {
        props: { data: data },
    };
};

export default LinkId;
