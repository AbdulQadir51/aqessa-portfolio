
import React from 'react';
import { useState } from 'react';
import { VerifyEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = VerifyEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    //console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div id="contact" className='container-fluid text-black'>
            <h2>Contact Me</h2>
            <div className='col-md-6'>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className='class="mb-3"'>
                    <div className="col-25">
                        <label className='form-label' htmlFor="name">Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" className='form-control' name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                </div>
                <div className='class="mb-3"'>
                    <div className="col-25">
                        <label className='form-label' htmlFor="email">Email:</label>
                    </div>
                    <div className="col-75">
                        <input type="email" className='form-control' name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>
                <div className='class="mb-3"'>
                    <div className="col-25">
                        <label className='form-label' htmlFor="message">Message:</label>
                    </div>
                    <div className="col-75">
                        <textarea name="message" className='form-control' defaultValue={message} rows="5" onBlur={handleChange} />
                    </div>
                </div>
                <div className="buttonHolder">
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
              
              <button className='btn btn-primary btn-block' data-testid="button" type="submit">Submit</button>
              
              </div>
            </form>
            </div>
         
            <div className="row">
                <div className="col-sm-6">
                <div className="mt-1">
                    <div><i className="fas fa-phone"></i> +14372485253</div>
                    <div>
                    <a href="mailto:abdulessa93@gmail.com"><i className="far fa-envelope"></i> abdulessa93@gmail.com</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-6">
                <div className="header-social mb-3 d-print-none aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <nav role="navigation">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com" title="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                            <span className="menu-title sr-only">LinkedIn</span>
                        </a>
                        </li>
                        <li className="nav-item">
                        
                        <a className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/AbdulQadir51" title="Github">
                            <i className="fab fa-github"></i>
                            <span className="menu-title sr-only">Github</span>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" rel="noreferrer" href="https://www.facebook.com" title="Facebook">
                            <i className="fab fa-facebook"></i>
                            <span className="menu-title sr-only">Facebook</span>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" rel="noreferrer" href="https://www.instagram.com" title="Instagram">
                            <i className="fab fa-instagram"></i>
                            <span className="menu-title sr-only">Instagram</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
               
               </div>
               </div>
               </div>
            
               
            
       
    );
}
export default ContactForm;



