import { sendRequestWithBearerToken } from "@/services/axiosConfig";

export const deleteBooking = async (id, currentUser) => {
  await sendRequestWithBearerToken(
    "delete",
    "bookings/id/" + id,
    null,
    currentUser
  );
};
