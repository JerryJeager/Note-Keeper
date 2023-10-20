import { useState } from "react";
import handleConvertToPDF from "../utils/convertToPdf";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import uploadFile from "../utils/uploadPdf";
import jsPDF from "jspdf";

const CreateNote = () => {
  const { accessToken } = useSelector((state) => state.user);
  const notifySuccess = () => toast("Note successfully added!");

  const [noteName, setNoteName] = useState("");
  const [noteImages, setNoteImages] = useState([]);


  const handleAddNote = () => {
    const pdfBlob = handleConvertToPDF(noteImages, noteName);
    uploadFile(pdfBlob, noteName, accessToken);
    // if (noteName.trim() !== "" && noteImages.length > 0) notifySuccess();
  };

  const handleDownloadPdf = () => {
    // const pdf = new jsPDF();
    let pdf = handleConvertToPDF(noteImages, noteName);
    // pdf = new jsPDF(pdf)
    // pdf.save(`${noteName}`)
    pdf.output('blob')
  };
  const handleFileChange = (e) => {
    const fileInput = e.target;
    const selectedFiles = fileInput.files;

    // Function to read a single file and return a Promise that resolves with the data URL
    const readFileAsync = (file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    };

    // Convert the selected files to an array of data URLs using Promise.all()
    Promise.all(Array.from(selectedFiles).map(readFileAsync)).then(
      (imageUrls) => {
        // Update the state with the imageUrls array
        setNoteImages(imageUrls);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(noteName);
    console.log(noteImages);
  };

  return (
    <div className="p-2">
      <ToastContainer />
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="note-name" className="mt-2 text-md block">
          Note Name
        </label>
        <input
          type="text"
          value={noteName}
          required
          onChange={(e) => setNoteName(e.target.value)}
          className="mt-2 w-[300px] rounded-sm outline-none p-2"
        />

        <label htmlFor="note-images" className="mt-6 text-md block">
          Select note images
        </label>
        <input
          type="file"
          required
          name="note-images"
          id="note-images"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2"
        />

        <button
          type="submit"
          className="mt-6 p-2 bg-white rounded-sm"
          onClick={handleAddNote}
        >
          Add
        </button>
        <button onClick={handleDownloadPdf}>
          <i className="fa-solid fa-download text-green-600 text-lg mt-2 ml-4"></i>
        </button>
      </form>
    </div>
  );
};
export default CreateNote;
