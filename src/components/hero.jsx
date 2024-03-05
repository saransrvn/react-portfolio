import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';
const Hero = ()=>{
  return(
    <section className='flex flex-col md:flex-row px-5 py-32 bg-gradient-to-r from-yellow-400 to-orange-500 justify-center'>
      <div className='md:w-1/2 flex flex-col'>
      <h1 className='text-white text-6xl font-hero-font'>Hi, <br/> I'm Saravanan <span className='text-black'>R,</span></h1>
      <p className='font-bold py-3 md:w-[500px] text-gray-700'>An Aspiring Front-end developer keen to learn and grow in this field.
       Take a look at my skills and projects.</p>
      <div className='flex py-10'>
        <a href='https://github.com/saransrvn' target='blank' className='pr-20 hover:text-white'><AiOutlineLinkedin size={35}/></a>
        <a href='https://github.com/saransrvn' target='blank' className='pr-10 hover:text-white'><AiOutlineGithub size={35}/></a>
      </div>
      </div>
      
      <img className='md:w-1/3' src={HeroImg} alt="initial-img" />
    </section>
  )
}
export default Hero;