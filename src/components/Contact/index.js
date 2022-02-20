import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };
    return (
        <section className='m-5'>
            <h1 data-testid="h1tag">Contact me</h1>
            <br />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="name">Name:</label>
                    <br />
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email address:</label>
                    <br />
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label className="form-label" htmlFor="message">Message:</label>
                    <br />
                    <textarea name="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text fw-light">{errorMessage}</p>
                    </div>
                )}
                <br />
                <button className='btn btn-outline-light' data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;