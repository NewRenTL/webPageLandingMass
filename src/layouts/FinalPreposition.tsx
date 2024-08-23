import React from 'react'

type Props = {}

const FinalPreposition = (props: Props) => {
  return (
    <div className='w-full flex flex-col md:flex-row bg-[#FFC100]'>
        <div className='flex flex-col w-full md:w-[50%] justify-center items-center px-12'>
            <h2 className='inline text-center font-inter1 text-[#082EB7] p-10 font-extrabold text-4xl'>
                Caser@, conoce más de mis marcas
            </h2>
            <div className='w-[70%] flex flex-col bg-[#082EB7] p-4 justify-center items-center rounded-3xl'>
                <p className='text-center justify-center text-white font-inter1 font-bold text-3xl uppercase'>Más info aqui</p>
            </div>
        </div>
        <div className='flex flex-col w-full md:w-[50%] justify-center items-center'>
            <img src='/img/Pagina_2/marcademass.png'></img>
        </div>
    </div>
  )
}

export default FinalPreposition