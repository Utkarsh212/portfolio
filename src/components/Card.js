import React from 'react'

export default function Card(props) {
    return (
        <div className="h-fit w-52 m-auto overflow-hidden shadow-lg rounded-2xl md:h-90 md:w-64 hover:scale-105 ease-in-out duration-300">
            <img alt="Project" src={props.imgUrl} className="rounded-t-lg" />
            <div className="bg-[#BC0E4C] w-full h-full p-4 relative">
                <button aria-label="Go to article" type="button" className="absolute rounded-full bg-[#FFC501] text-white w-12 h-12 right-8 -top-6 hover:scale-105 ease-in-out duration-200">
                View
                </button>
                <p className="text-white text-lg md:text-xl font-medium mb-2 ">
                    {props.title}
                </p>
                <p className="text-white text-xs">
                    {props.techstack}
                </p>
            </div>
        </div>
    )
}