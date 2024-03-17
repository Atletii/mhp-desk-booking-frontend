import { sendRequestWithBearerToken } from "@/services/axiosConfig";

export const deleteBooking = async (id, currentUser) => {
  await sendRequestWithBearerToken(
    "delete",
    "bookings/delete/" + id,
    null,
    currentUser
  );
  setTimeout(() => {
    refreshRooms(date);
  }, 1000);
  toast.success("Appointment deleted successfully!");
};
