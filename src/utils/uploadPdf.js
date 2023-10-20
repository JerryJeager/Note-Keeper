import axios from "axios";
export default async function uploadFile(pdfBlob, name, accessToken) {
  try {
    // let file = new Blob([fileContent], { type: 'application/pdf' });
    let metadata = {
      name: name, // Filename at Google Drive
      mimeType: "application/pdf", // mimeType at Google Drive
    };
    let form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", pdfBlob);

    let postReq = await axios.post(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",
      form,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
		  "Content-Type": 'multipart/related'
        },
      }
    );

    console.log(postReq.data);
  } catch (error) {
    console.error("error while posting file to google drive!", error);
  }

}
