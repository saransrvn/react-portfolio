import AboutImg from '../assets/about.png';
const About = ()=>{
 
  const data = {
    data1:`Hi, I'm Saravanan R. I holds a master degree in Applied Electronics(2021) and Bachelor degree in Electronics and Communication Science(2019) and also completed Hardware and Networking course at IIHT.`,
    data2:['HTML', 'CSS', 'JAVASCRIPT', 'REACT JS','TAILWIND CSS'],
  };

  return(
    <section id='about' className='flex flex-col md:flex-row bg-purple-400 py-10'>
    <div className='md:w-1/2 pb-5'>
      <img src={AboutImg} alt="aboutImg" />
      </div>

      <div className='flex md:w-1/2'>
      <div className='flex flex-col justify-center text-white px-5'>
      <h1 className='text-4xl border-b-2 mb-5 w-[170px] font-bold border-primary'>About Me</h1>
        <p className='pb-5'>{data.data1}</p> 
        <h1 className='text-4xl border-b-2 mb-5 w-[90px] font-bold border-primary'>Skills</h1>
        {data.data2.map((skill,i)=>(
          <ul key={i} className='list-disc'>
            <li className='py-2 ml-5'>{skill}</li>
          </ul>
        ))}

        </div>

       
      </div>
    
    </section>
  )
}
export default About