"use client"

import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { addDays } from "date-fns"
import SeatPicker from "../Utils/seatPicker"

import "react-datepicker/dist/react-datepicker.css";

export default function page() {
    const [startDate, setStartDate] = useState(new Date());
    console.log(new Date())
  return (
    <>
        <div>Radiated Men Concert</div>
        <DatePicker
            className="text-black"
            selected={startDate}
            onChange={(date:any) => setStartDate(date)}
            includeDates={[new Date("2023-12-25T23:15:30"), addDays(new Date("2023-12-25T23:15:30"), 6)]}
            placeholderText="This only includes today and tomorrow"
        />
        <SeatPicker/>
    </>
    ); 

  }

