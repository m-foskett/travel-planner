"use client"

import { DateRangePicker } from "@/components/DateRangePicker";
import { LoadingButton } from "@/components/LoadingButton";
import TripGrid from "@/components/TripGrid";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [generated, setGenerated] = useState<boolean>(false)
  const [dateRange, setDateRange] = useState<DateRange | undefined>()

  const generateTrip = () => {
    // Set loading state to true
    setLoading(true)
    // Set generated to true
    if (dateRange != null) setGenerated(true);
    // Set loading state to false
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
      <div className='flex flex-col'>
        <h1 className='text-white font-semibold text-3xl'>Travel Planner</h1>
        <h2 className='text-white font-semibold pt-3'>Choose your trip dates...</h2>
        <div className="flex flex-row">
          {/* Date Range Picker */}
          <DateRangePicker setDateRange={setDateRange}/>
          {/* Buttons */}
          {loading ? (
            <LoadingButton buttonText = 'Generating Planner' />
          ) : (
            <Button onClick={generateTrip}>
              Generate
            </Button>
          )}
        </div>
        {/* Generated Content */}
        {generated ? (
            <TripGrid dateRange={dateRange}/>
        ) : (
          <div> No generated trip to show. </div>
        )}
      </div>
    </main>
  )
}
