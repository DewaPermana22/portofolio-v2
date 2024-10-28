import React from 'react'

type TipeInputan = {
    label : string
    type : string
    placeholder : string
}

const Inputan: React.FC<TipeInputan> = ({ label, type, placeholder }) => {
    return (
        <div className='flex flex-col max-w-sm'>
            <label className='ps-2 text-[#282a29] font-FiraMedium'>{label}</label>
            <input className='p-3 bg-[#f5f5f5] rounded-md focus:border-none text-sm font-JetBrain' type={type} placeholder={placeholder} />
        </div>
    );
};

const InputMsg : React.FC = () => {
    return (
        <div className='flex flex-col max-w-sm '>
            <label className=' ps-2 text-[#282a29] font-FiraMedium'>Message</label>
            <textarea className='resize-none h-28 rounded-md p-3 bg-[#f5f5f5] focus:border-none text-sm font-JetBrain' name="" id=""></textarea>
        </div>
    )
}
const FormCTA : React.FC = () => {
  return (
    <div>
        <form className='flex shadow-lg px-7 flex-col py-8 gap-4 max-w-md bg-[#f6bd60] p-5 rounded-md' action="">
            <h1 className='text-3xl font-FiraBold'>Get In Touch.</h1>
            <Inputan label="Name" type="text" placeholder="Your Name" />
            <Inputan label="Email" type="email" placeholder="Enter Your Email" />
            <InputMsg />
            <button className='bg-[#282a29] text-[#ffe6a7] max-w-sm mt-3 p-3 rounded-lg' type='submit'>Send Message</button>
        </form>
    </div>
  )
}

export default FormCTA