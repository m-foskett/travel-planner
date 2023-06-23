import { DateRangePicker } from "@/components/DateRangePicker";
import { LoadingButton } from "@/components/LoadingButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className='flex flex-col'>
        <h1 className='text-white font-semibold text-3xl'>Travel Planner</h1>
        <h2 className='text-white font-semibold pt-3'>Choose your trip dates...</h2>
        <div className="flex flex-row">
          {/* Date Range Picker */}
          <DateRangePicker />
          {/* Loading Button */}
          <LoadingButton buttonText = 'Generating Planner'/>
        </div>
      </div>
    </main>
  )
}
