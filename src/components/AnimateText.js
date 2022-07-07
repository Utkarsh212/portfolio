import React from 'react'

function AnimateText(props) {
    console.log(props.text)
    let animatedText = props.text.split('').map((letter, index)=>{return <span key={index} className='inline-block hover:text-[#FFC501] hover:animate-rubber'>{letter}</span>})
    return (
        <>
            {animatedText}
        </>
    )
}

export default AnimateText
