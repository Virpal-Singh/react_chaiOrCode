import React from "react"
import Dog from '../../assets/dog.jpg'
import { Link,NavLink } from "react-router-dom"
import { useContext ,useEffect} from "react";
import ThemeContext from "../../Context/ThemeContext";
function Header(){
     const context = useContext(ThemeContext);
    
            if (!context) {
            return <div>Error: ThemeContext not found</div>; 
            }
    
            const { DarkThemeMode,setTheme } = context;
        
    
       useEffect(() => {
            const html = document.documentElement; // cleaner than querySelector('html')
            html.classList.remove('dark', 'light');
            html.classList.add(DarkThemeMode ? 'dark' : 'light');
            }, [DarkThemeMode]);
    
    return(
        <>
           <nav className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 dark:bg-gray-900/80 dark:border-gray-700 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
  <div className="px-4">
    <div className="flex items-center justify-between">
      <div className="flex shrink-0">
        <Link className="flex items-center" to="/">
          <img className="h-11 w-auto rounded-lg" src={Dog} alt="" />
          <p className="sr-only">Website Title</p>
        </Link>
      </div>
      <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'text-orange-700' : 'text-gray-700 dark:text-gray-300'
            } rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-orange-700`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'text-orange-700' : 'text-gray-700 dark:text-gray-300'
            } rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-orange-700`
          }
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'text-orange-700' : 'text-gray-700 dark:text-gray-300'
            } rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-orange-700`
          }
          to="/contact"
        >
          Contact
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'text-orange-700' : 'text-gray-700 dark:text-gray-300'
            } rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-orange-700`
          }
          to="find"
        >
          Find
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `inline-block ${
              isActive ? 'text-orange-700' : 'text-gray-700 dark:text-gray-300'
            } rounded-lg px-2 py-1 text-sm font-medium text-gray-900 dark:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-orange-700`
          }
          to="theme"
        >
          Theme
        </NavLink>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Link
          className="hidden items-center justify-center rounded-xl bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 transition-all duration-150 hover:bg-gray-50 dark:hover:bg-gray-700 sm:inline-flex"
          // to="/login"
        >
          Sign in
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          // to="/login"
        >
          Login
        </Link>
      </div>
      <label className="relative inline-block w-[40px] h-[40px] cursor-pointer">
  <input
    type="checkbox"
    checked={DarkThemeMode}
    onChange={(e) => setTheme(e.target.checked)}
    className="peer opacity-0 w-full h-full absolute z-10 cursor-pointer"
  />
  <span
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px]   rounded-full"
  ></span>
  <span
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] peer-checked:shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)] peer-active:shadow-[inset_0_1px_3px_rgba(255,255,255,0.3)]"
  ></span>
  <span
    className="absolute text-[18px] font-bold top-0 left-0 w-full h-full flex items-center justify-center text-black/90 peer-active:text-black/45 peer-active:text-[26px] peer-checked:text-blue-600 transition-colors"
  >
    ☼
  </span>
</label>



    </div>
  </div>
</nav>

        </>
    )
}

export default Header