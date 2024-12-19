import Booking from "@/components/reservation/booking";
import Confirmation from "@/components/reservation/confirmation";
import { getCustomers } from "@/lib/database";

export default function Reservation() {
  const customers = getCustomers();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Booking />
      <Confirmation customers={customers} />
    </section>
  );
}
