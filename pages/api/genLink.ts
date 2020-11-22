import { NextApiRequest, NextApiResponse } from 'next';
import fire from '../../config/fire-config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, description, image } = req.query;
    console.log('requested');
    const doc = await fire.firestore().collection('links').add({
        title: title,
        description: description,
        image: image,
    });
    if (doc) {
        res.status(200).json({ id: doc.id });
    } else {
        res.status(500).json({ message: 'Server error whilst generating link' });
    }
};

export default handler;
