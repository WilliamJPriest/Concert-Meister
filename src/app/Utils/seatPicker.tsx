"use client"
import React, { useState } from 'react'

// possible seat mapping
// 1. Have it check the database for each row and seat num to see if it's booked (possibly really slow) caching?
// 2. Have every row and seat number in the database for a range of dates or having dynamic dates if possible (expensive for large datasets)
// 3. Leave it as it won't allow for someone to book another person's seat (bad user exp so I am unlikely to do it)

export default function seatPicker() {   
    const [showSeats, setShowSeats] =useState(false)
    const [bookedSeats,setBookSeats] = useState<string[]>([]); 
    let data:string


    let numberOfSeats = 5
    const seatingRow =["A", "B","C"] //swap for ascii?
    const seatNo: number[]=[]   
 


    for(let i =0; i < numberOfSeats; i++){
      seatNo.push(i+1)
    }

    const openSeatMenu = () =>{
      setShowSeats(true)
    }

    const addANewSeat = (e:any) =>{
      if(bookedSeats.includes(e.target.value)){
        data = e.target.value
        let checkedBookedSeats= bookedSeats.filter((e) => e !== data)
        setBookSeats([...checkedBookedSeats])
        e.target.classList.remove("text-green-500")
      }else{
        setBookSeats([...bookedSeats, e.target.value])
        e.target.classList.add("text-green-500")
      }
    
      }
      
      


  
  return (
    <>
      <article className='flex flex-col justify-center align-center text-center mx-auto'>
        <h2>Select Your Seat</h2>
        <input  className="text-black bg-white w-64" onClick={openSeatMenu} value={bookedSeats}/> 
        {seatingRow.map(row =>(  
          <div className={showSeats ? "grid grid-cols-5 w-32 pl-2":"hidden"} key={row}>
            {seatNo.map(Num =>(
              <button onClick={(e) => addANewSeat(e)} value={row+Num+""} key={row+Num+""}>{row+Num+""}</button>
            ))}
          </div>

        ))}
      </article>
    </>
  )
}
