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
        //TODO: Add link to database
        setTitle('');
        setDescription('');
        setImage('');
        setGeneratedLink(`https://parrot-1.herokuapp.com/links/${id}`);
    };

    return (
        <div>
            <h1>Create Link</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Title' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' placeholder='Description' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type='text' placeholder='Image' />
                </Form.Group>
                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default GenerateLink;
