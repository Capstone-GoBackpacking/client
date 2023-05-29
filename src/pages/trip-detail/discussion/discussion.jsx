import { useMutation } from "@apollo/client";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState, useRef } from "react";
import { Button, Comment, Post } from "src/components";
import { CREATE_POST } from "src/graphql/posts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  addPost,
  postsAsync,
} from "src/redux/reducers/discussion/discussion.reducer";
import discussionSelector from "src/redux/reducers/discussion/discussion.selector";
import { CREATE_COMMENT } from "src/graphql/comments";
import { Button as ButtonPrime } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";
import { ProgressBar } from "primereact/progressbar";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";

const PostDiscussion = ({ post }) => {
  const [createComment] = useMutation(CREATE_COMMENT);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleComment = async () => {
    if (comment?.trim()) {
      const { data } = await createComment({
        variables: {
          input: {
            content: comment,
            postId: post.id,
          },
        },
      });
      dispatch(addComment(data.createComment));
      setComment("");
    }
  };

  return (
    <div>
      <Post
        key={post.id}
        avatar={post.avatar}
        hostname={post.author.profile.fullName}
        content={post.content}
        images={post?.images.map((item) => item.url)}
        time={post?.time}
      />
      <div className="mt-2">
        <div className="flex items-center gap-2">
          <InputTextarea
            autoResize
            className="h-8 w-full p-1"
            placeholder="Write your comment!"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="primary"
            name="Add"
            className="h-8 px-2"
            onClick={() => handleComment()}
          />
        </div>
        {post.comments?.map((comment) => (
          <Comment
            key={comment.id}
            text={comment.content}
            hostname={comment.hostname}
            avatar={comment.avatar}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

const Discussion = () => {
  const { tripId } = useParams();
  const [createPost] = useMutation(CREATE_POST);
  const { posts } = useSelector(discussionSelector);
  const dispatch = useDispatch();
  const toast = useRef(null);

  const [content, setContent] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showUploadImage, setShowUploadImage] = useState(false);

  useEffect(() => {
    if (tripId) {
      dispatch(postsAsync(tripId));
    }
  }, [tripId]);

  const handleCreatePost = async () => {
    if (content?.trim()) {
      const { data } = await createPost({
        variables: {
          input: {
            content,
            tripId,
            images: uploadedImages.map((image) => image.fileUrl),
          },
        },
      });
      dispatch(addPost(data.createPost));
      setContent("");
    }
  };

  const [totalSize, setTotalSize] = useState(0);
  const fileUploadRef = useRef(null);

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
    setUploadedImages(JSON.parse(e.xhr.response));
    // setShowUploadImage(false);
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
        <div className="align-items-center ml-auto flex gap-3">
          <span>{formatedValue} / 1 MB</span>
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
      <div className="align-items-center flex flex-wrap">
        <div className="align-items-center flex" style={{ width: "40%" }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex-column ml-3 flex text-left">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
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
      <div className="align-items-center flex-column flex">
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
    <>
      <div className="m-auto w-11/12">
        <div className="flex justify-between gap-5">
          <img
            src="/assets/images/defaults/avatar.png"
            alt="avatar"
            className="h-12 w-12 cursor-pointer rounded-full"
          />
          <InputTextarea
            value={content}
            className="mx-10 flex-1"
            autoResize
            onChange={(e) => setContent(e.target.value)}
          />
          <div>
            <ButtonPrime
              icon="pi pi-image"
              onClick={() => setShowUploadImage(true)}
            />
          </div>
          <Button
            type="primary"
            name="Post"
            className="h-12 px-6"
            onClick={() => handleCreatePost()}
          />
        </div>
        <div>
          {posts
            .slice()
            .sort((a, b) => b.time - a.time)
            .map((post) => {
              console.log(posts);
              return <PostDiscussion key={post.id} post={post} />;
            })}
        </div>
      </div>
      <Dialog
        visible={showUploadImage}
        header="Upload Image"
        onHide={() => {
          setShowUploadImage(false);
        }}
      >
        <div>
          <Toast ref={toast}></Toast>

          <Tooltip
            target=".custom-choose-btn"
            content="Choose"
            position="bottom"
          />
          <Tooltip
            target=".custom-upload-btn"
            content="Upload"
            position="bottom"
          />
          <Tooltip
            target=".custom-cancel-btn"
            content="Clear"
            position="bottom"
          />

          <FileUpload
            ref={fileUploadRef}
            name="files"
            url="http://localhost:3000/upload/multiple/images"
            multiple
            accept="image/*"
            maxFileSize={1000000}
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
      </Dialog>
    </>
  );
};

export default Discussion;
