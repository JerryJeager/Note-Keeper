import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {

    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)


    const handleClickedHamburger = () => {
        setIsHamburgerClicked(preValue => !preValue)
    }

    const { userImg } = useSelector(state => state.user)
    const { isLoggedIn } = useSelector(state => state.user)


    return ( 
       <div className="py-4 px-[5%] flex gap-7 justify-between items-center shadow-md">
        {/* logo */}
        <NavLink to='/'>
          <div className="justify-self-center">
            <img src="img/Logo/logo1-removebg.png" alt="logo" className="w-[150px]" />
          </div>
        </NavLink>
          <div className="flex gap-2 items-center">
           {/* user image */}
            {userImg &&  <div>
               <img src={userImg} alt="user-img" className="h-[30px] w-[30px] rounded-full" />
            </div>  
            }    


            {/* hamburger menu icon */}
            <div onClick={handleClickedHamburger} className={`cursor-pointer relative ${isHamburgerClicked ? "z-10" : ""}`}>
                <div className={`h-1 w-[27px] bg-black  duration-500 ${isHamburgerClicked ? "translate-x-[-4.5px] translate-y-[6px] rotate-[-405deg] " : ""} `}></div>
                <div className={`h-1 w-[27px] bg-black mt-2 duration-500 ${isHamburgerClicked ? "translate-x-[-4.5px] translate-y-[-6px] rotate-[405deg]" : ""}`}></div>
            </div>

             {/* NavBar */}
            <div className={` transition-all duration-500 ${isHamburgerClicked ? "h-[100vh] w-[60%] absolute top-0 bg-white right-[0%]" : "right-[-100%]"}`}>
                <div className={`${isHamburgerClicked ? "flex items-center" : "hidden"}`}>
                    <ul className="text-lg font-bold flex flex-col justify-between mt-[50px] p-4">
                        <li>
                            <NavLink to={'/'} onClick={() => setIsHamburgerClicked(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${isLoggedIn ? '/MyNotes' : '/Login'}`} onClick={() => setIsHamburgerClicked(false)}>My Notes</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${isLoggedIn ? '/CreateNote' : '/Login'}`} onClick={() => setIsHamburgerClicked(false)}>Create Note</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Login'} onClick={() => setIsHamburgerClicked(false)}>Sign in</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
          </div>
       </div> 
    );
}

export default Header;