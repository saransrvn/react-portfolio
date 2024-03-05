
import {AiOutlinePhone, AiOutlineMail} from "react-icons/ai";

const Contact = ()=>{
  const data = {
    mob:'+91 7904080783',
    email:'srvn1251@gmail.com',
  }
  return(
    <section id='contact' className='flex flex-col bg-orange-400 px-5 py-20'>
      <div className='flex flex-col items-center text-white px-5'>
        <h1 className='text-4xl border-b-2 mb-5 w-[140px] font-bold border-secondary'>Contact</h1>
        <p className='pb-5 ml-3'>If you want to discuss more in detail, Please contact me.</p> 
        </div>
        <div className="flex flex-col items-center mr-63">
          <div className=" flex py-5 items-center font-bold">
          <AiOutlinePhone size={35}/>{data.mob}</div>

          <div className="flex items-center font-bold ml-11 gap-2">
          <AiOutlineMail size={35}/>{data.email}</div>
    
        </div>
       
    </section>
  )
}
export default Contact