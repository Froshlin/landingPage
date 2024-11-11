import React, { useState } from "react";

function FormInput() {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();

    return (
        <div className="form-main-container">
            <div className="label-input-container">
                <label>First Name:</label>
                <input
                    type="text"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </div>
            <div className="label-input-container">
                <label>Last Name:</label>
                <input
                    type="text"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            <div className="label-input-container">
                <label>Email Address:</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
    );
}

export default FormInput;
