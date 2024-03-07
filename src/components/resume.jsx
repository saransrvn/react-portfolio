
import ResumeImg from '../assets/resume.jpg';
const Resume = ()=>{
  return(
    <section id='resume' className='flex flex-col md:flex-row bg-secondary py-10'>
    <div className='md:w-1/2 py-5 flex justify-center'>
      <img className='w-[300px] h-[300px]' src={ResumeImg} alt="resumeImg" />
      </div>

      <div className='flex md:w-1/2'>
      <div className='flex flex-col justify-center text-white px-5'>
        <h1 className='text-4xl border-b-2 mb-5 w-[140px] font-bold border-primary ml-3'>Resume</h1>
        <div>
        <p className='pb-5 ml-3'>You can view my resume here <button className='download-button'><a href='https://drive.google.com/file/d/1a4gmMks4Z2hxMxfy61XTCEzdvMyWqFqv/view?usp=drive_link' target='blank'>Download</a></button> </p>
        </div>
        </div>
       
      </div>
    
    </section>
  )
}
export default Resume