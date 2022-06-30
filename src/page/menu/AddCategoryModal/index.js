import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { db } from "../../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import FileInput from "../../../components/FileInput";

const AddCategoryModal = ({ isOpen, setOpen }) => {
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsSaving(true);
      await addDoc(collection(db, "category"), {
        name: category,
        imageUrl,
        created: Timestamp.now(),
      });
      setIsSaving(false);
      setOpen(false);
    } catch (err) {
      alert(err);
    }
  };
  const handleClose = () => {
    const hasChanges = imageUrl !== "" || category !== "";

    if (hasChanges) {
      if (window.confirm("Are you sure you want to discard your changes?")) {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setOpen}
      title={"Add Category"}
      onOk={() => {
        handleSubmit();
      }}
      okButtonProps={{
        disabled: isUploading || isSaving,
      }}
      onCancel={() => {
        handleClose();
      }}
      okText={"Save"}
    >
      <div className="my-7 text-start">
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
          Category Name
        </label>
        <Input
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
          Image
        </label>
        <FileInput
          fileUrl={(e) => {
            setImageUrl(e);
          }}
          uploading={(e) => {
            setIsUploading(e);
          }}
        />
      </div>
    </Modal>
  );
};
export default AddCategoryModal;
