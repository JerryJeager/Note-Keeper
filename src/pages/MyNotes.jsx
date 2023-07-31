import { useNavigate } from "react-router-dom";


function MyNotes() {

    const navigate = useNavigate()

    return ( 
        <>
            <div className="h-[90vh] p-2">
                <div className="mt-4">
                    <h2 className="font-bold text-lg">
                        Convert your note images to pdf
                    </h2>
                    <div className="flex justify-center items-center bg-white rounded-md mt-2 p-2 w-[100px] " onClick={() => navigate('/CreateNote') }>
                        <p>Add Notes</p>
                    </div>
                </div>
            </div>
            
        </>

     );
}

export default MyNotes;