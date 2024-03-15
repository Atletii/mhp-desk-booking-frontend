"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import Navbar from "@/components/navbar/Navbar"

export default function Home() {
    const [date, setDate] = useState(new Date())

    return (
        <>
            <Navbar />
            <div className="flex justify-center">

                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            </div>
        </>

    )
};