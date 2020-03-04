import React, { useState, useEffect } from 'react';
import '../css/common.css';

export function Content(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("")
    const [formData, setFormData] = useState("")
    const [error, setError] = useState({
        username: null,
        email: null,
        gender: null
    })

    useEffect(() => {

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(prevState => {
            return {
                ...prevState,
                username: username.length < 8 ? "Username should have atleast 8 characters" : null,
                email: email.length < 8 ? "Please enter valid email" : null,
                gender: !gender ? "Please select a gender" : null
            }
        })
        // setFormData(
        //     JSON.stringify(
        //         {
        //             username,
        //             email,
        //             gender
        //         }
        //     )
        // )
    }

    return (
        <div className="content">
            <h3>Signup</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-error">{error.username && <p>{error.username}</p>}</div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-error">{error.email && <p>{error.email}</p>}</div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select value={gender} name={gender} onChange={e => setGender(e.target.value)} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="form-error">{error.gender && <p>{error.gender}</p>}</div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>
                {formData}
            </p>
        </div>
    )
}