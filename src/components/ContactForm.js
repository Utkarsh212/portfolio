import React from 'react'
import Footer from './Footer'
import './GetHelp.css'

export default function GetHelp() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: ""
        }
    )

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            comments: ""
        })
    }
    return (
        <div className='container'>
            <section className='section' id='query-section'>
                <div id='query-card'>
                    <h1 className='section-title' id="query-section-title">QUERIES</h1>
                    <p className='help-description'>Submit this form to resolve all your queries regarding the labs.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='input-elem'
                            id='first-name'
                            type="text"
                            placeholder="First Name"
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}
                        />
                        <input
                            className='input-elem'
                            id='last-name'
                            type="text"
                            placeholder="Last Name"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                        />
                        <br />
                        <input
                            className='input-elem'
                            id='email'
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                        />
                        <br />
                        <textarea
                            className='input-elem'
                            id='comments'
                            value={formData.comments}
                            placeholder="Comments"
                            onChange={handleChange}
                            name="comments"
                        />
                        <br />
                        <button className='help-section--button'>Submit</button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}