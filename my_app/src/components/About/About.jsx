import virpal from '../../assets/n1.png'
import { useNavigate } from "react-router-dom"
function About(){
  const navigate=  useNavigate()
    return(
        <>
            <section className="bg-white py-16">
                  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                    {/* Left: Image */}
                    <div className="w-full lg:w-1/3">
                      <img
                        src={virpal}
                        alt="App preview"
                        className="w-full rounded-lg "
                      />
                    </div>
            
                    {/* Right: Text + Button */}
                    <div className="w-full lg:w-1/2 lg:pl-12 mb-10 lg:mb-0 text-center lg:text-left">
                      <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
                        A Mern-Stack Developer
                      </h2>
                      <p className="text-lg text-black-900  mb-6">
                            Hi, I'm <strong>Virpal Singh</strong>, a passionate <strong>MERN Stack Developer</strong> with expertise in building dynamic and responsive web applications. I specialize in <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>, creating full-stack solutions that are scalable and efficient. I enjoy turning complex problems into simple, elegant code and constantly strive to stay updated with the latest technologies.

                      </p>
            
                      <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                              onClick={()=>window.location.href='https://github.com/Virpal-Singh'}
                      >
                        View on Github
                      </button>
                    </div>
                  </div>
                </section>
        </>
    )
}
export default About