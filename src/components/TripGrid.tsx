import { differenceInDays, format } from 'date-fns'
import React from 'react'
import { DateRange } from "react-day-picker"

interface TripGridProps {
  dateRange: DateRange | undefined,
}

function TripGrid({dateRange}: TripGridProps) {
  // Days in trip
  var daysInTrip: number = 2;
  // Calculate days within date range
  if(dateRange?.from && dateRange.to)
  {
    daysInTrip = differenceInDays(dateRange.from, dateRange.to);
  }

  return (
    // Rendering elements by number of days
    // [...Array(daysInTrip),].map(
    //   (value: undefined, index: number) => (
      <div></div>
      // <div key={index}>{value}</div>
      // )
    // )
  );
}

export default TripGrid