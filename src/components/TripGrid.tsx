import { format } from 'date-fns'
import React from 'react'
import { DateRange } from "react-day-picker"

interface TripGridProps {
  dateRange: DateRange | undefined,
}

function TripGrid({dateRange}: TripGridProps) {
  return (
    <div>
      {dateRange?.from ? (
        dateRange.to ? (
          <>
            {format(dateRange.from, "LLL dd, y")} -{" "}
            {format(dateRange.to, "LLL dd, y")}
          </>
        ) : (
          format(dateRange.from, "LLL dd, y")
        )
      ) : (
        <span>Nothing to display!</span>
      )}
    </div>
  )
}

export default TripGrid