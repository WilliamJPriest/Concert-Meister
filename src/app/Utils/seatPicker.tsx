"use client"
import PreviousMap from 'postcss/lib/previous-map';
import React, { useState } from 'react'

export default function seatPicker() {   
    const [showSeats, setShowSeats] =useState(false)
    const [bookedSeats,setBookSeats] = useState<string[]>([]); 
    let data:string[] = []


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
        let data = e.target.value
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
