import React from 'react'
import AnimateText from './AnimateText'

function Contact() {
  const [formData, setFormData] = React.useState(
    {
      Name: "",
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
      Name: "",
      email: "",
      comments: ""
    })
  }
  return (
    <div className='text-white space-y-4'>
      <div>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
        <br />
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-["League_Spartan"] font-semibold tracking-wider'>
          <AnimateText text="Contact" />
        </h1>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
      </div>
      <p className='text-md md:text-lg lg:text-xl font-["League_Spartan"]'>Want to connect? My inbox is always open! Don't hesitate to contact me using below form either.</p>
      <div>
        <form onSubmit={handleSubmit} className="bg-white text-black p-4 flex flex-col">
          <input
            className='font-light border focus:outline-none py-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#FFC501]'
            id='name'
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="Name"
            value={formData.Name}
          />
          <br />
          <input
            className='font-light border focus:outline-none py-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#FFC501]'
            id='email'
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <br />
          <textarea
            className='font-light border focus:outline-none py-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#FFC501]'
            id='comments'
            value={formData.comments}
            placeholder="Message"
            onChange={handleChange}
            name="comments"
          />
          <br />
          <button className='hover:text-white text-[#354F60] border-2 border-[#FFC501] hover:bg-[#BC0E4C] w-[max(30%,180px)] mx-4 py-2 text-gray-50 font-bold'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
