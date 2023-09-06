import { differenceInDays, eachDayOfInterval, format } from 'date-fns'
import React from 'react'
import { DateRange } from "react-day-picker"
import DayBlock from './DayBlock';

interface TripGridProps {
  dateRange: DateRange | undefined,
}

function TripGrid({ dateRange }: TripGridProps) {
  // Days in the selected trip
  var daysInTrip: number = 2;
  // All dates within trip
  var datesInTrip: Date[];
  // Calculate days within date range
  if (dateRange?.from && dateRange.to) {
    daysInTrip = differenceInDays(dateRange.to, dateRange.from) + 1;
    datesInTrip = eachDayOfInterval({
      start: dateRange?.from as Date,
      end: dateRange?.to as Date,
    });
  }

  return (
    // Rendering elements by number of days
    [...Array(daysInTrip),].map(
      (value: undefined, index: number) => (
        <DayBlock key={index} date={datesInTrip[index]} />
      )
    )
  );
}

export default TripGrid