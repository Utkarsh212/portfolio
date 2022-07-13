import React from 'react'

function AnimateText(props) {
    const [letterClass, setLetterClass] = React.useState("text-[#FFC501] animate-rubber");
    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass("hover:text-[#FFC501] hover:animate-rubber")
        }, 3000)
    }, [])
    let animatedText = props.text.split('').map((letter, index)=>{return <span key={index} className={`inline-block ${letterClass}`}>{letter}</span>})
    return (
        <>
            {animatedText}
        </>
    )
}

export default AnimateText
