"use client"

import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { addDays, getDay } from "date-fns"
import SeatPicker from "../Utils/seatPicker"

import "react-datepicker/dist/react-datepicker.css";

export default function page() {
    const [startDate, setStartDate] = useState(null);
    const isWeekend = (date: number | Date) => {
      const day = getDay(date);
      return day == 0 || day ==6;
    };
  return (
    <>
      <article className='flex flex-col text-center py-4' >
          <div>Radiated Men Concert</div>
          <DatePicker
              className="text-black w-64"
              selected={startDate}
              filterDate={isWeekend}
              onChange={(date:any) => setStartDate(date)}
              placeholderText=" Select date"
          />
          <SeatPicker 
          startDate={startDate}
          />
      </article>
    </>
    ); 

  }


