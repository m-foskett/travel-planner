import React from 'react'

interface DayBlockProps {
    key: number;
    date: Date,
};

const DayBlock = ({key, date, }: DayBlockProps) => {

  return (
    <div
        key={key}
        className='text-lg text-black bg-white w-40 h-40 border border-solid border-black text-center
        flex-row flex-wrap items-center justify-center font-bold italic underline'
    >
        Day: {key}
        {/* {date.toISOString()} */}
        Add an event.
        {/* Dropdown - Actions */}
        <div
            className='text-white font-bold text-xs text-center border border-solid border-white w-20 h-5
            bg-black hover:opacity-80 hover:cursor-pointer italic underline flex-col top-[10%] left-[74%] translate-x-[-50%]
            translate-y-[-50%] relative'
        >
            Actions
        </div>
    </div>
  )
}

export default DayBlock