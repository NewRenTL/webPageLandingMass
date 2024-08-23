import React from 'react'
import ron from '../../../public/img/ron.png'

const CardProduct = ({imgServe =ron,name="default",field="field",cant="bl x 1kg", price=10.50}) => {
  return (
    <div className='flex flex-row py-6 px-5 mx-5 my-4 max-h-0 md:max-h-full rounded-lg justify-center items-center bg-slate-300'>
        <div className='w-[40%] flex justify-center items-center'>
            <img src={imgServe}></img>
        </div>
        <div className='w-[60%] flex flex-col px-2 py-2 justify-center items-center'>
            <p className='w-full flex text-center text-lg font-inter1 justify-center'>
                {name}
            </p>
            <h2 className='w-full flex text-center font-inter1 font-bold text-lg justify-center'>
                {field}
            </h2>
            <p className='w-full flex text-center text-lg justify-center'>
                {cant}
            </p>
            <p className='w-full flex text-center font-bold  text-lg justify-center'>
                {Number(price).toFixed(2)}
            </p>
        </div>
    </div>
  )
}

export default CardProduct