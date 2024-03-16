import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

const CreateAppointment = () => {
    const [fromHour, setFromHour] = useState('');
    const [toHour, setToHour] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleInvalidTime() {
        // Parse selected hours
        const [fromHourHours, fromHourMinutes] = fromHour.split(':').map(num => parseInt(num));
        const [toHourHours, toHourMinutes] = toHour.split(':').map(num => parseInt(num));

        // Convert selected hours to minutes
        const fromHourInMinutes = fromHourHours * 60 + fromHourMinutes;
        const toHourInMinutes = toHourHours * 60 + toHourMinutes;

        console.log("start", fromHourInMinutes)
        console.log("end", toHourInMinutes)

    }

    return (
        <Dialog>
            <DialogTrigger>Create Appointment</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-blue-900 text-2xl">Create Appointment: My data</DialogTitle>
                    <DialogDescription>
                        Day: 20.10.2024
                    </DialogDescription>
                    <div className="flex py-3">
                        <div className="mr-4">
                            <label htmlFor="fromHour">From:</label>
                            <input
                                type="time"
                                id="fromHour"
                                value={fromHour}
                                onChange={(e) => setFromHour(e.target.value)}
                                className="border border-gray-300 rounded-md mx-2 px-2 py-1 w-32"
                            />
                        </div>
                        <div>
                            <label htmlFor="toHour">To:</label>
                            <input
                                type="time"
                                id="toHour"
                                value={toHour}
                                onChange={(e) => setToHour(e.target.value)}
                                className="border border-gray-300 rounded-md mx-2 px-2 py-1 w-32"
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <input
                            type="checkbox"
                        />
                        <p className="mx-3 font-semibold">All Day</p>
                    </div>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <div className="justify-end flex">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" onClick={handleInvalidTime}>
                            Book
                        </button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CreateAppointment;