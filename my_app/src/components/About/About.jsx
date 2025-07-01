import virpal from '../../assets/n1.png'
import { useNavigate } from "react-router-dom"
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
function About(){
  const navigate=  useNavigate()
    return(
        <>
            <section className="bg-white dark:bg-gray-900 py-16">
  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
    
    {/* Left: Image */}
    <div className="w-full lg:w-1/3">
      <img
        src={virpal}
        alt="App preview"
        className="w-full rounded-lg"
      />
    </div>

    {/* Right: Text + Button */}
    <div className="w-full lg:w-1/2 lg:pl-12 mb-10 lg:mb-0 text-center lg:text-left">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        A Mern-Stack Developer
      </h2>
      <p className="text-lg text-black dark:text-gray-300 mb-6">
        Hi, I'm <strong>Virpal Singh</strong>, a passionate <strong>MERN Stack Developer</strong> with expertise in building dynamic and responsive web applications. I specialize in <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>, creating full-stack solutions that are scalable and efficient. I enjoy turning complex problems into simple, elegant code and constantly strive to stay updated with the latest technologies.
      </p>

      <button
        className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        onClick={() => window.location.href = 'https://github.com/Virpal-Singh'}
      >
        View on Github
      </button>
    </div>
  </div>

  <div className="w-screen h-[50px] mt-20 text-center bg-red-100 dark:bg-red-900">
    <h1 className="text-3xl text-blue-900 dark:text-blue-300 font-bold">Team-Members</h1>
  </div>

  <div className="bg-white dark:bg-gray-900 mt-5 h-auto py-4 mx-auto gap-4 flex justify-center flex-wrap items-start">
    {[img1, img2, img3, img4, img5].map((img, index) => {
      const names = ["Virpal-Singh", "Sarbaj Malek", "Sachin Daraji", "Sanjay Choudhary", "Amit Kumar"];
      return (
        <div
          key={index}
          className="w-[200px] mx-auto shadow-xl hover:shadow-2xl dark:shadow-md dark:hover:shadow-lg h-[320px] bg-white dark:bg-gray-800 rounded-xl p-2 flex flex-col justify-between"
        >
          <div>
            <img className="w-[200px] object-cover rounded-xl h-auto" src={img} alt="" />
          </div>
          <h1 className="text-black dark:text-white text-center">{names[index]}</h1>
          <p className="text-center text-gray-700 dark:text-gray-400 text-sm px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius quo tempora magni quisquam quia?
          </p>
        </div>
      );
    })}
  </div>
</section>

        </>
    )
}
export default About