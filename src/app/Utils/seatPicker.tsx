import React from 'react'

export default function seatPicker() {   
    let numberOfSeats = 5
    const seatingRow =["A", "B","C"]
    const seatNo: number[]=[]
    for(let i =0; i < numberOfSeats; i++){
      seatNo.push(i+1)
    }
  return (
    <>
        <p>{seatNo[4]}</p>
        <p>Hi</p>
    </>
  )
}
