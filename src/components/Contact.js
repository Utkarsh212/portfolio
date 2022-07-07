import React from 'react'

function Contact() {
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
    <div>
      <span>&lt;h1&gt;</span>
      <h1>Contact me</h1>
      <span>&lt;h1&gt;</span>
      <p>Want to connect? My inbox is always open! Don't hesitate to contact me using below form either.</p>
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
  )
}

export default Contact
