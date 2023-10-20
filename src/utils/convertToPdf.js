import jsPDF from "jspdf"

const handleConvertToPDF = async (noteImages, noteName) => {
  if (noteImages.length === 0) {
    alert('Please select images before converting to PDF.');
    return;
  }

  // Create a new instance of jsPDF
  const pdf = new jsPDF();

  // Function to create an Image object and resolve it when the image is loaded
  const loadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  };

  try {
    let firstImageLoaded = false; // To track if the first image is loaded

    for (const imageUrl of noteImages) {
      if (!firstImageLoaded) {
        firstImageLoaded = true; // Mark the first image as loaded
      } else {
        pdf.addPage(); // Add a new page for each image (except the first one)
      }

      const img = await loadImage(imageUrl);
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (imgWidth / img.width) * img.height;

      // Calculate the vertical position based on the image height and the available page height
      const verticalPosition = pdf.internal.pageSize.getHeight() - imgHeight;

      // Add the image to the PDF with adjusted dimensions and positioning
      pdf.addImage(img, 'JPEG', 0, verticalPosition, imgWidth, imgHeight);
    }

    // Save the PDF and trigger the download
    pdf.save(`${noteName}`);
    
    return pdf
  } catch (error) {
    console.error('Error converting images to PDF:', error);
  }
};


  
  

export default handleConvertToPDF