import React, { useState } from "react";
import "./Modal.css";

export default function RegisterModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Register
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Register</h2>

                        <h3>First name</h3>
                        <input type="text" />

                        <h3>Surname</h3>
                        <input type="text" />

                        <h3>Email</h3>
                        <input type="text" />

                        <h3>Country</h3>
                        <input type="text" />

                        <h3>County/State</h3>
                        <input type="text" />

                        <h3>Username</h3>
                        <input type="text" />

                        <h3>Password</h3>
                        <input type="text" />

                        <h3>Retype Password</h3>
                        <input type="text" />

                        {/* <label>
                            FirstName:
                            <input type="text" onChange={e => setFirstName(e.target.value)} required />
                        </label>

                        <label>
                            Surname:
                            <input type="text" onChange={e => setSurname(e.target.value)} required />
                        </label>
                        <label>
                            Email:
                            <input type="text" onChange={e => setEmail(e.target.value)} required />
                        </label>

                        <label>
                            Country:
                            <input type="text" onChange={e => setCountry(e.target.value)} required />
                        </label>
                        <label>
                            County-State:
                            <input type="text" onChange={e => setCountyState(e.target.value)} required />
                        </label>

                        <label>
                            Username:
                            <input type="text" onChange={e => setUsername(e.target.value)} required />
                        </label>
                        <label>
                            Password:
                            <input type="text" onChange={e => setPassword(e.target.value)} required />
                        </label>
                        <label>
                            Retype Password:
                            <input type="text" onChange={e => setRetypePassword(e.target.value)} required />
                        </label> */ }


                        <button button className="close-modal" onClick={toggleModal}>
                            X
                        </button>

                        <button type='submit'>Create an account</button>


                    </div>
                </div>
            )
            }

        </>
    );
}