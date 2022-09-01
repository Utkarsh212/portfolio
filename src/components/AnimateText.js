import React from 'react'

function AnimateText(props) {
    let animatedText = props.text.split('').map((letter, index)=>{return <span key={index} className={`inline-block hover:animate-rubber hover:text-[#FFC501]`}>{letter}</span>})
    return (
        <>
            {animatedText}
        </>
    )
}

export default AnimateText
