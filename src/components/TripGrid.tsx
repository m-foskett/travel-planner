import { differenceInDays, format } from 'date-fns'
import React from 'react'
import { DateRange } from "react-day-picker"

interface TripGridProps {
  dateRange: DateRange | undefined,
}

function TripGrid({ dateRange }: TripGridProps) {
  // Days in the selected trip
  var daysInTrip: number = 2;
  // Calculate days within date range
  if (dateRange?.from && dateRange.to) {
    daysInTrip = differenceInDays(dateRange.to, dateRange.from) + 1;
  }

  return (
    // Rendering elements by number of days
    [...Array(daysInTrip),].map(
      (value: undefined, index: number) => (
        <div key={index} className='text-lg text-white w-40 h-40 border border-solid border-white text-center'>
          Day: {index}
          {/* Dropdown - Actions */}
          <div className='text-white font-bold text-xs text-center px-3 py-3 border border-solid border-white w-20 h-10 bg-black hover:opacity-5 cursor:pointer'>
            Actions Dropdown
          </div>
        </div>
      )
    )
  );
}

export default TripGrid