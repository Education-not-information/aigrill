import { insertBooking } from "@/lib/database";
import { revalidatePath } from "next/cache";

export default function Booking() {
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const time = currentDate.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hours}:${time}`;

  async function postBooking(formdata) {
    "use server";
    const name = formdata.get("name");
    const email = formdata.get("email");
    const date = formdata.get("aidate");
    const time = formdata.get("aitime");
    const people = formdata.get("people");

    const uniqueId = "Ai#" + crypto.randomUUID().split("-")[1];
    const imgSrc =
      "https://i.pravatar.cc/150?img=" + Math.floor(Math.random() * 70);
    const comment = "";

    const allBookingData = {
      name,
      email,
      imgSrc,
      date,
      time,
      people,
      uniqueId,
      comment,
    };

    if ((name || email) !== "") {
      insertBooking(allBookingData);
    }
    revalidatePath("/reservation");
  }

  return (
    <form
      action={postBooking}
      className="col-span-1 row-span-6 grid grid-rows-subgrid gap-8 bg-slate-950 p-4"
    >
      <h1 className="heading-text text-orange-500">
        Welcome to Ai Grill, please book a table
      </h1>
      <section className="text-p flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          placeholder="Enter your name"
          required
          className="rounded-sm border-b bg-transparent outline-none focus:border-lime-500"
        />
      </section>
      <section className="text-p flex flex-col gap-2">
        <label htmlFor="name">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Enter your e-mail"
          required
          className="rounded-sm border-b bg-transparent outline-none focus:border-lime-500"
        />
      </section>

      <section className="text-p flex flex-col gap-2">
        <h1 className="mb-1">Please select date and time</h1>
        <section className="flex items-center gap-2">
          <label htmlFor="aidate">Date</label>
          <input
            type="date"
            name="aidate"
            id="aidate"
            defaultValue={today}
            required
            min={today}
            className="h-10 w-full rounded-sm border-b border-lime-500 bg-slate-600 shadow-sm outline-none"
          />
          <label htmlFor="aitime">Time</label>
          <input
            type="time"
            name="aitime"
            id="aitime"
            defaultValue={currentTime}
            required
            min={currentTime > "12:00" ? currentTime : "12:00"}
            max="22:00"
            className="h-10 w-full rounded-sm border-b border-lime-500 bg-slate-600 shadow-sm outline-none"
          />
        </section>
      </section>

      <section className="text-p flex flex-col gap-2">
        <label htmlFor="people">Number of people</label>
        <input
          type="number"
          name="people"
          id="people"
          required
          className="rounded-sm border-b bg-transparent outline-none focus:border-lime-500"
        />
      </section>

      <button
        type="submit"
        className="text-p h-12 w-full rounded-sm bg-black transition-all hover:bg-orange-500"
      >
        Make Reservation
      </button>
    </form>
  );
}
