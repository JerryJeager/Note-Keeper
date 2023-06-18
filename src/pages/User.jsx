import { useEffect } from 'react'
import { useLocation } from "react-router-dom";



function User() {
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const picture = queryParams.get("picture")

    useEffect(() => {
        console.log(picture)
    }, [])

    return ( 
        <>
            <div className="h-[90vh]">
                {/* Profile picuture */}
                <img src={`${picture}`} alt= "" className="rounded-full w-[40px] h-[50px]" />
                
                <div className="mt-4 text-center">
                    <h2>Welcome to the real world!</h2>
                </div>
            </div>
            
        </>

     );
}

export default User;