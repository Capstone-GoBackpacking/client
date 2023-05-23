import { AiFillStar } from "react-icons/ai";
import defaultAvatar from "src/assets/images/avatar.png";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useQuery } from "@apollo/client";
import { GENDERS } from "src/graphql/genders";
import { Button as GButton } from "src/components";
import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import { useDispatch } from "react-redux";

const ProfileInfoContainer = ({
  avatar,
  fullName,
  birthday,
  star,
  email,
  firstName,
  lastName,
  gender,
}) => {
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const { data: genders } = useQuery(GENDERS);
  const [updateProfile, setUpdateProfile] = useState({
    firstName: null,
    lastName: null,
    avatar: null,
    genderId: null,
    birthday: null,
  });

  useEffect(() => {
    if (avatar || lastName || firstName || gender || birthday)
      setUpdateProfile({
        firstName,
        lastName,
        avatar,
        genderId: gender,
        birthday,
      });
  }, []);

  const changeUpdateHandler = (key, value) => {
    setUpdateProfile((state) => ({ ...state, [key]: value }));
  };

  return (
    <>
      <div className="border-b py-5">
        <div className="flex w-11/12 m-auto gap-x-3">
          <div>
            <img
              src={avatar || defaultAvatar}
              className="w-40 h-40"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center flex-2">
            <h2>{fullName || "Who are you?"}</h2>
            <p>{email}</p>
            <p>{birthday}</p>
            <div className="flex items-center">
              <AiFillStar className="text-yellow-300" />
              <span>{star || 0}</span>
            </div>
          </div>
          <div className="flex-1">
            <GButton
              type="primary"
              name="Edit Profile"
              className="w-full py-1"
              onClick={() => setShowUpdateProfile(true)}
            />
          </div>
        </div>
      </div>
      <Dialog
        visible={showUpdateProfile}
        onHide={() => setShowUpdateProfile(false)}
      >
        <div>
          <div className="mb-3 flex gap-3">
            <div className="flex-1">
              <label>First Name</label>
              <InputText
                className="w-full"
                onChange={(e) =>
                  changeUpdateHandler("firstName", e.target.value)
                }
              />
            </div>
            <div className="flex-1">
              <label>Last Name</label>
              <InputText
                className="w-full"
                onChange={(e) =>
                  changeUpdateHandler("lastName", e.target.value)
                }
              />
            </div>
          </div>
          <div className="mb-3 flex gap-3">
            <div className="flex-1">
              <label>Birthday</label>
              <Calendar
                showIcon
                className="w-full"
                onChange={(e) => changeUpdateHandler("birthday", e.value)}
              />
            </div>
            <div className="flex-1">
              <label>Gender</label>
              <Dropdown
                className="w-full"
                options={genders?.genders.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
                onChange={(e) => changeUpdateHandler("genderId", e.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label>Avatar</label>
            <TemplateDemo onChange={(e) => changeUpdateHandler("avatar", e)} />
          </div>
          <div>
            <Button label="Submit" severity="success" className="mr-3" />
            <Button label="Cancel" severity="danger" />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProfileInfoContainer;

function TemplateDemo({ onChange }) {
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);
  const dispatch = useDispatch();

  const onTemplateSelect = (e) => {
    let _totalSize = totalSize;
    let files = e.files;

    Object.keys(files).forEach((key) => {
      _totalSize += files[key].size || 0;
    });

    setTotalSize(_totalSize);
  };

  const onTemplateUpload = (e) => {
    let _totalSize = 0;
    e.files.forEach((file) => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const headerTemplate = (options) => {
    const { className, chooseButton, uploadButton, cancelButton } = options;
    const value = totalSize / 10000;
    const formatedValue =
      fileUploadRef && fileUploadRef.current
        ? fileUploadRef.current.formatSize(totalSize)
        : "0 B";

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 2 MB</span>
          <ProgressBar
            value={value}
            showValue={false}
            style={{ width: "10rem", height: "12px" }}
          ></ProgressBar>
        </div>
      </div>
    );
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
            height={100}
          />
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i
          className="pi pi-image mt-3 p-5"
          style={{
            fontSize: "5em",
            borderRadius: "50%",
            backgroundColor: "var(--surface-b)",
            color: "var(--surface-d)",
          }}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
          className="my-5"
        >
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  return (
    <div>
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

      <FileUpload
        ref={fileUploadRef}
        name="file"
        url="http://localhost:3000/upload/avatar"
        accept="image/*"
        maxFileSize={2000000}
        onUpload={onTemplateUpload}
        onSelect={onTemplateSelect}
        onError={onTemplateClear}
        onClear={onTemplateClear}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
    </div>
  );
}
