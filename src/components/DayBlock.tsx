import React, { ChangeEvent, useState } from 'react'
import { Input } from './ui/Input'

interface DayBlockProps {
    date: Date,
};

const DayBlock = ({date, }: DayBlockProps) => {
    // State Variables
    const [place, setPlace] = useState<string>('');
    const [subheading, setSubheading] = useState<string>('');
    const [checklistItem, setChecklistItem] = useState<string>('');

    // Subheading Input Change Handler
    const subheadingInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // Get the subheading input value from the event
        setSubheading(event.target.value)
    };
    // Place Input Change Handler
    const placeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // Get the place input value from the event
        setPlace(event.target.value)
    };
    // Checklist Item Input Change Handler
    const checklistItemInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // Get the checklist item input value from the event
        setChecklistItem(event.target.value)
    };

    return (
        <div
            className='text-xl  text-black bg-white w-fill h-50 border border-solid border-black text-center
            flex-row flex-wrap items-center justify-center font-bold italic underline'
        >
            {date.toDateString()}
            {/* Dropdown - Actions */}
            <div
                className='text-white font-bold text-xs text-center border border-solid border-white w-20 h-5
                bg-black hover:opacity-80 hover:cursor-pointer italic underline flex-col top-[0%] left-[85%] translate-x-[-50%]
                translate-y-[-50%] relative'
            >
                Actions Dropdown
            </div>
            {/* Add a Subheading Input */}
            <Input
                className='font-bold text-center bg-primary-950 text-white border-solid text-sm border-black py-3 px-3 italic flex'
                placeholder='Add a subheading'
                type='text'
                id='subheadingInput'
                name='subheadingInput'
                onChange={subheadingInputHandler}
            />
            {/* Add a Place Input */}
            <Input
                className='font-bold text-center bg-primary-950 text-white border-solid text-sm border-black py-3 px-3 italic flex'
                placeholder='Add a place'
                type='text'
                id='placeInput'
                name='placeInput'
                onChange={placeInputHandler}
            />
            {/* Add a Checklist Item Input */}
            <Input
                className='font-bold text-center bg-primary-950 text-primary-50 border-solid text-sm border-black py-3 px-3 italic flex'
                placeholder='Add a checklist item'
                type='text'
                id='checklistItemInput'
                name='checklistItemInput'
                onChange={checklistItemInputHandler}
            />
        </div>
    )
}

export default DayBlock