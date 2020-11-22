import React, { FC, FormEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

interface Props {}

const GenerateLink: FC<Props> = ({}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setGeneratedLink('Generating Link...');

        let { id, message } = await (
            await fetch(`/api/genLink?title=${title}&description=${description}&image=${image}`)
        ).json();

        setTitle('');
        setDescription('');
        setImage('');
        setGeneratedLink(`https://parrot-1.herokuapp.com/links/${id}`);
    };

    return (
        <div>
            <h1>Create Link</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                        type='text'
                        placeholder='Title'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        type='text'
                        placeholder='Description'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        value={image}
                        onChange={({ target }) => setImage(target.value)}
                        type='text'
                        placeholder='Image'
                    />
                </Form.Group>
                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
            <h3>{generatedLink}</h3>
        </div>
    );
};

export default GenerateLink;
