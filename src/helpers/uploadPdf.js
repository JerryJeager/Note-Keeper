
export default async function uploadFile(pdfBlob, name, accessToken) {
	let fileContent = pdfBlob; // As a sample, upload a text file.
	let file = new Blob([fileContent], { type: 'application/pdf' });
	let metadata = {
		'name': name, // Filename at Google Drive
		'mimeType': 'application/pdf', // mimeType at Google Drive
		// TODO [Optional]: Set the below credentials
		// Note: remove this parameter, if no target is needed
		// 'parents': ['SET-GOOGLE-DRIVE-FOLDER-ID'], // Folder ID at Google Drive which is optional
	};
	let form = new FormData();
	form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
	form.append('file', file);

	let xhr = new XMLHttpRequest();
	xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id');
	xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
	xhr.responseType = 'json';
	xhr.onload = () => {
		if (xhr.status === 200) {
			console.log('File uploaded successfully! File ID:', xhr.response.id);
		  } else {
			console.error('File upload failed. Status:', xhr.status, 'Error:', xhr.statusText);
		  }
	};
	xhr.send(form)

}
