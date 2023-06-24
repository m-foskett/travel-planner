"use client"

import { DateRangePicker } from "@/components/DateRangePicker";
import { LoadingButton } from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className='flex flex-col'>
        <h1 className='text-white font-semibold text-3xl'>Travel Planner</h1>
        <h2 className='text-white font-semibold pt-3'>Choose your trip dates...</h2>
        <div className="flex flex-row">
          {/* Date Range Picker */}
          <DateRangePicker />
          {/* Buttons */}
          {loading ? (
            <LoadingButton buttonText = 'Generating Planner' />
          ) : (
            <Button onClick={() => setLoading(true)}>
              Generate
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
