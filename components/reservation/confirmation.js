"use client";

import { useEffect, useState } from "react";

export default function Confirmation({ customers }) {
  const [booking, setBooking] = useState({});

  const emptyObject =
    Object.keys(booking).length === 0 && booking.constructor === Object;

  const currentDate = new Date();
  const createdDate = currentDate.toISOString().split("T")[0];
  const createdTime = currentDate
    .toISOString()
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(" ");

  const currentCreatedAt = `${createdDate}${createdTime}`;

  const lastCustomer = customers[customers.length - 1];
  const customerCreatedDate =
    customers[customers.length - 1].createdAt.split(" ")[0];

  const customerCreatedTime = customers[customers.length - 1].createdAt
    .split(" ")[1]
    .split(":")
    .slice(0, 2)
    .join(" ");

  const customerCreatedAt = `${customerCreatedDate}${customerCreatedTime}`;

  const customerConfirmation =
    currentCreatedAt === customerCreatedAt ? lastCustomer : booking;

  const handleConfirmation = () => {
    location.reload();
    return lastCustomer;
  };

  useEffect(() => {
    localStorage.setItem("confirm", JSON.stringify(customerConfirmation));
  }, [customerConfirmation]);

  useEffect(() => {
    setBooking(
      localStorage.getItem("confirm") &&
        JSON.parse(localStorage.getItem("confirm")),
    );
  }, []);

  const formatedDate = new Date(booking.date)
    .toLocaleString("en-GB", {
      timeZone: "UTC",
    })
    .split(",")[0];

  return (
    <section className="text-p col-span-1 row-span-6 grid grid-rows-subgrid gap-8 bg-slate-700 p-4">
      <h1 className="heading-text text-orange-500">
        Click the button to get confirmation.
      </h1>
      <section>
        <button
          onClick={handleConfirmation}
          className="mb-3 h-12 w-full rounded-sm bg-lime-500 transition-all hover:bg-lime-700"
        >
          Get confirmation
        </button>
        <p>Dear, {booking.name}</p>
      </section>

      {emptyObject ? (
        <section className="bg-slate-800 p-2"></section>
      ) : (
        <>
          {" "}
          <section className="bg-slate-800 p-2">
            <p>
              Your table is reserved on{" "}
              <span className="bg-orange-500 p-1">
                {formatedDate} at {booking.time}
              </span>{" "}
              for
              <span className="ml-1 bg-orange-500 p-1">
                {booking.people}
              </span>{" "}
              people
            </p>
            <p>
              Your reservation ID is{" "}
              <span className="bg-orange-500 p-1">{booking.uniqueId}</span>
              please do note your reservation ID.
            </p>
          </section>
          <p>
            If the booking is not displayed, please contact us.
            <br />
            <br />
            Please let us know if you to cancel the reservation.
          </p>
          <p>Thank you for your reservation</p>
        </>
      )}

      <section className="bg-slate-800 p-2">
        <h1 className="heading-text text-lime-500">Contact details</h1>
        <p>Phone number: (+00) 123 456 7890</p>
        <p>E-mail address: message@aigrill.com</p>
      </section>
    </section>
  );
}
