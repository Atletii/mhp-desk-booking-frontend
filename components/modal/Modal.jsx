import { format, parseISO } from "date-fns";

export default function Modal({ isOpen, onClose, room, date }) {
  if (!isOpen) return null;

  console.log(isOpen);
  console.log(room);
  console.log(date);
  const formattedDate =
    typeof date === "string"
      ? format(parseISO(date), "dd.MM.yyyy")
      : format(date, "dd.MM.yyyy");

  return (
    <div
      className="z-50 fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center"
      id="myModal"
    >
      <div className="p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Create Appointment: {room.name}
          </h3>
          <form className="mt-4">
            <div className="mt-4 mb-4">
              <h3 className="text-sm font-medium text-gray-700">
                Day: {formattedDate}
              </h3>
            </div>
            <div className="mb-2">
              <label
                htmlFor="from"
                className="block text-sm font-medium text-gray-700"
              >
                From:
              </label>
              <input
                type="time"
                id="from"
                name="from"
                className="mt-1 p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="to"
                className="block text-sm font-medium text-gray-700"
              >
                To:
              </label>
              <input
                type="time"
                id="to"
                name="to"
                className="mt-1 p-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                id="all-day"
                name="all-day"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label
                htmlFor="all-day"
                className="ml-2 block text-sm text-gray-900"
              >
                All Day
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Book
              </button>
              <button
                id="closeModalButton"
                onClick={onClose}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
