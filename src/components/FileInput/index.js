import React, { useState, useRef } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";

const FileInput = ({ fileUrl, uploading }) => {
  const [progresspercent, setProgresspercent] = useState();
  const [file, setFile] = useState({})
  const fileRef = useRef();
  const handleUpload = (e) => {
    e.preventDefault();
    uploading(true);
    const storage = getStorage();
    const file = e.target.files[0];
    setFile(file)
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        uploading(false);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          fileUrl(downloadURL);
        });
      }
    );
  };

  return (
    <label className="block mt-3 w-full text-gray-600">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          handleUpload(e);
        }}
        ref={fileRef}
        className="hidden"
      />
      <button
        onClick={() => {
          fileRef.current.click();
        }}
        className="text-sm text-gray-500 mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100"
      >
        Choose Image
      </button>
      {
        file.name || 'No image selected.'
      }
    </label>
  );
};

export default FileInput;
