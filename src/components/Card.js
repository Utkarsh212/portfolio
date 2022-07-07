import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64">
            <img alt="Project" src={props.imgUrl} className="rounded-t-lg" />
            <div className="bg-white w-full p-4 relative">
                <button aria-label="Go to article" type="button" className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6">
                View
                </button>
                <p className="text-gray-800 text-xl font-medium mb-2">
                    {props.title}
                </p>
                <p className="text-gray-600 text-xs">
                    {props.techstack}
                </p>
            </div>
        </div>
    )
}