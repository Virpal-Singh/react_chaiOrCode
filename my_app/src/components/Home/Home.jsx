import Dog from '../../assets/dog.jpg'
function Home(){
  
    return(
        <>
            <section className="bg-white dark:bg-gray-900 py-16">
  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
    {/* Left: Image */}
    <div className="w-full lg:w-1/2">
      <img
        src={Dog}
        alt="App preview"
        className="w-full rounded-lg"
      />
    </div>

    {/* Right: Text + Button */}
    <div className="w-full lg:w-1/2 lg:pl-12 mb-10 lg:mb-0 text-center lg:text-left">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to DoGo 
      </h2>
      <p className="text-lg text-black dark:text-gray-300 mb-6">
        <b className="text-xl dark:text-white">DoGo</b> helps you manage tasks, connect with your team, and boost productivity. Join thousands who are simplifying their workflow.
      </p>

      <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition">
        Download App
      </button>
    </div>
  </div>
</section>

        </>
    )
}
export default Home