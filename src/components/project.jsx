
import websiteImg1 from '../assets/msp.jpg';
import websiteImg2 from '../assets/rps.png';
import websiteImg3 from '../assets/calc img.jpg';

const Project = ()=>{

const projects = [
  {
    image:websiteImg1,
    name:'msp website',
    descrip:'A Media Streaming Platform. Build with HTML and CSS',
    link:'https://mediastreamingplat.netlify.app/',
  },
  {
    image:websiteImg2,
    name:'rps game',
    descrip:'Rock Paper Scissor Game. Build with JavaScript',
    link:'https://rpsgameplay.netlify.app/'
  },
  {
    image:websiteImg3,
    name:'simple calculator',
    descrip:'Simple Calculator.Build with JavaScript',
    link:'https://simplecalculatortool.netlify.app/',
  }
];

return(
  <section id='project' className="bg-primary text-white pb-20 pt-10">
    <div className="flex flex-col">
      <h1 className='text-4xl border-b-2 m-5 w-[140px] font-bold border-secondary'>Projects</h1>
      <p className='mb-10 px-5'>These are some of my projects. I have built these with HTML, vanilla CSS and JavaScript</p>
    </div>

    <div className='flex flex-col md:flex-row gap-10 justify-between'>
     { projects.map((project,i) =>(
      <a key={i} href={project.link} target='blank'>
        <div className='relative'>
        <img className='h-[200px] w-[500px] px-5' src={project.image} alt={project.name}/>
        <div className='project-descrip'>
        <p className='text-center px-5 py-5'>{project.descrip}</p>
        <p className='text-center font-bold'>Click for a demo</p>
       </div>
     </div>
     </a>
  ))}  
    </div>
  </section>
)
}
export default Project