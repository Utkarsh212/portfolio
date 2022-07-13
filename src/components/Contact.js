import React from 'react'
import AnimateText from './AnimateText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faAt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  /* const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]); */

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
    <div className='w-full text-white space-y-4 flex flex-col lg:flex-row lg:justify-between lg:items-center h-fit'>
      <div className='flex flex-col justify-evenly items-start lg:w-1/2 space-y-5'>
        <div>
          <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
          <br />
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-["League_Spartan"] font-semibold tracking-wider'>
            <AnimateText text="Contact" />
          </h1>
          <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;/h1&gt;</span>
        </div>
        <p className='text-md md:text-lg lg:text-xl font-["League_Spartan"]'>Get in touch, let's talk. Fill in the details and feel free to connect with me.</p>
        <div className="flex flex-col justify-evenly items-center w-1/2 space-y-5 m-auto lg:m-0">
          <div className="flex flex-row items-center space-x-6 rounded-md border hover:border hover:border-[#FFC501] p-2 min-w-[200px] w-full">
            <p className='text-gray-50 font-normal text-sm lg:text-base font-["League_Spartan"]'>
              <a href="tel:+919057506991">
                <FontAwesomeIcon icon={faPhone} color="#FFC501" />&nbsp;&nbsp;
              </a>
              +91 9987384723
            </p>
          </div>
          <div className="flex flex-row items-center space-x-6 rounded-md border hover:border hover:border-[#FFC501] p-2 min-w-[200px] w-full">
            <p className='text-gray-50 font-normal text-sm lg:text-base font-["League_Spartan"]'>
              <a href="mailto:utka21200@gmail.com">
                <FontAwesomeIcon icon={faAt} color="#FFC501" />&nbsp;&nbsp;
              </a>
              utka21200@gmail.com
            </p>
          </div>
          <div className="flex flex-row items-center space-x-6 rounded-md border hover:border hover:border-[#FFC501] p-2 min-w-[200px] w-full">
            <p className='text-gray-50 font-normal text-sm lg:text-base font-["League_Spartan"]'>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Ajmer,+Rajasthan/@26.4532432,74.6357137,12z/data=!3m1!4b1!4m5!3m4!1s0x396be6d8fcb7cd01:0xcbaf8f12eb8100ee!8m2!3d26.4498954!4d74.6399163">
              <FontAwesomeIcon icon={faLocationDot} color="#FFC501" />&nbsp;&nbsp;
            </a>
              Ajmer, Rajasthan
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-[#2c404d] text-black p-4 flex flex-col lg:w-1/2 h-full lg:self-end">
        <input
          className='bg-[#354F60] font-light border focus:outline-none py-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#FFC501]'
          id='name'
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="Name"
          value={formData.Name}
        />
        <br />
        <input
          className='bg-[#354F60] font-light border focus:outline-none py-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#FFC501]'
          id='email'
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <br />
        <textarea
          className='bg-[#354F60] font-light border focus:outline-none py-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#FFC501]'
          id='comments'
          value={formData.comments}
          placeholder="Message"
          onChange={handleChange}
          name="comments"
        />
        <br />
        <button className='hover:text-[#354F60] text-[#FFC501] border-2 border-[#FFC501] hover:bg-[#FFC501] w-[max(30%,160px)] mx-4 py-2 font-bold'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Contact
