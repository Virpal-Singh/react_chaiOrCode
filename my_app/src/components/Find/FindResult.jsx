import { useParams } from 'react-router-dom'
import usegithub from '../../hooks/github'
function FindResult(){ 

    const {gitname}=useParams()
    const [data,loading,error]=usegithub(gitname)
    if (loading) {
  return (
    <div className="w-screen h-[200px] bg-white-500 dark:bg-gray-900 text-gray dark:text-white flex justify-center items-center">
      <div className="flex flex-row gap-2">
        <div className="animate-pulse bg-gray-300 dark:bg-gray-600 w-12 h-12 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-600 w-28 h-5 rounded-full"></div>
          <div className="animate-pulse bg-gray-300 dark:bg-gray-600 w-36 h-5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

if (error || !data) {
  return (
    <div className="w-screen h-[200px] bg-white-500 dark:bg-gray-900 text-white flex justify-center items-center">
      <h1 className="text-blue-800 dark:text-blue-400">No Data Found</h1>
    </div>
  );
}

else{
     return(
         <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-40 h-40 md:w-56 md:h-56">
          <img
            src={data.avatar_url}
            alt="           User Profile"
            className="w-full h-full object-cover rounded-full shadow-md"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{data.name}</h2>
          <div className="flex justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-400 mb-4">
            <div>
              <p className="text-xl font-semibold">{data.followers}</p>
              <p className="text-sm">Followers</p>
            </div>
            <div>
              <p className="text-xl font-semibold">{data.following}</p>
              <p className="text-sm">Following</p>
            </div>
            <div>
              <p className="text-xl font-semibold">{data.public_repos}</p>
              <p className="text-sm">Public_repos</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            {data.bio}
          </p>
        </div>
      </div>
    </section>
    )
}
}
export default FindResult
