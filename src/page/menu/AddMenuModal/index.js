import React, { useState } from "react";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { db } from "../../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { INITIAL_FORM_DATA } from "./contants";
import SizeSelector from "../../../components/SizeSelector";
import CheckBox from "../../../components/CheckBox";
import FileInput from "../../../components/FileInput";
import { validateForm } from "../../../utils/functions";

const AddMenuModal = ({ isOpen, setOpen, selectedCategory }) => {
  const [form, setForm] = useState(INITIAL_FORM_DATA);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const handleSubmit = async () => {
    const errors = validateForm(form, ["name", "price", "cost", "stock"]);
    const sizeError = form.hasSize && form.size === "";
    if (errors || sizeError) {
      let newErrors = {};
      if (sizeError) {
        newErrors = {
          ...errors,
          size: "Size is required.",
        };
      } else {
        newErrors = {
          ...errors,
        };
      }
      setForm({
        ...form,
        errors: newErrors,
      });
    } else {
      try {
        setIsSaving(true);
        const formData = {
          ...form,
          price: form.price === "" ? 0 : form.price,
          cost: form.cost === "" ? 0 : form.cost,
          stock: form.stock === "" ? 0 : form.stock,
        };
        delete formData["errors"];
        await addDoc(collection(db, "menu"), {
          ...formData,
          category: selectedCategory.id,
          created: Timestamp.now(),
        });
        setIsSaving(false);
        setOpen({});
      } catch (err) {
        alert(err);
      }
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      errors: {
        ...form.errors,
        [e.target.name]: "",
      },
    });
  };

  const handleClose = () => {
    const hasChanges =
      JSON.stringify(form) !== JSON.stringify(INITIAL_FORM_DATA);
    if (hasChanges) {
      if (window.confirm("Are you sure you want to discard your changes?")) {
        setOpen({});
      }
    } else {
      setOpen({});
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setOpen}
      title={`Add ${selectedCategory.name} Menu`}
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
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
          Name
        </label>
        <Input
          value={form.name}
          name="name"
          error={form.errors.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3 flex flex-row items-center gap-2">
          Has Size
          <CheckBox
            onChange={(e) => {
              setForm({
                ...form,
                hasSize: e.target.checked,
                size: e.target.checked === false ? "" : form.size,
                errors: {
                  ...form.errors,
                  size: "",
                },
              });
            }}
            name="hasSize"
          />
        </label>

        {form.hasSize && (
          <React.Fragment>
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-3 flex flex-row items-center gap-2">
              Select Size
            </label>
            <SizeSelector
              selectedSize={(e) => {
                setForm({
                  ...form,
                  size: e,
                  errors: {
                    ...form.errors,
                    size: "",
                  },
                });
              }}
            />
            {(form.errors.size) && (
              <label className="text-red-700 w-full mx-2 text-sm mt-2">
                &#8226; {form.errors.size}
              </label>
            )}
          </React.Fragment>
        )}
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
          Price
        </label>
        <Input
          value={`${form.price}` !== "0" ? form.price : ""}
          name="price"
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          error={form.errors.price}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
          Cost
        </label>
        <Input
          value={`${form.cost}` !== "0" ? form.cost : ""}
          name="cost"
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          error={form.errors.cost}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
          Stock
        </label>
        <Input
          value={`${form.stock}` !== "0" ? form.stock : ""}
          name="stock"
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          error={form.errors.stock}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label className="block text-gray-700 text-sm font-bold mb-1 mt-3">
          Image
        </label>
        <FileInput
          fileUrl={(e) => {
            setForm({
              ...form,
              image: `${e}`,
            });
          }}
          uploading={(e) => {
            setIsUploading(e);
          }}
        />
      </div>
    </Modal>
  );
};
export default AddMenuModal;
