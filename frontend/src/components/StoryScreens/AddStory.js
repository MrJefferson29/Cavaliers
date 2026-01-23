import React, { useRef, useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AuthContext } from "../../Context/AuthContext";
import { FiArrowLeft } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";
// import b2 from '../../Assets/b2.jpg'
import { AiOutlineUpload } from 'react-icons/ai';
import "../../Css/AddStory.css";

const AddStory = () => {
  const { config } = useContext(AuthContext);
  const imageEl = useRef(null);
  const editorEl = useRef(null);
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [age, setAge] = useState("");
  const [files, setFiles] = useState([])
  const [weight, setWeight] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("");
  const [sex, setSex] = useState("");

  const clearInputs = () => {
    setTitle("");
    setContent("");
    setPrice("");
    setAge("");
    setWeight("");
    setImage("");
    setFiles([]);
    setSex("");
    editorEl.current.editor.setData("");
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 5) {
      setError("Maximum 5 images allowed");
      return;
    }
    setFiles(selectedFiles);
    setError("");
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (files.length === 0) {
    setError("Please upload at least one image");
    return;
  }

  if (files.length > 5) {
    setError("Maximum 5 images allowed");
    return;
  }

  if (!sex) {
    setError("Please select the sex");
    return;
  }

  const formdata = new FormData();
  formdata.append("title", title);
  formdata.append("content", content);
  formdata.append("price", price);
  formdata.append("age", age);
  formdata.append("weight", weight);
  formdata.append("color", color);
  formdata.append("sex", sex);
  
  // Append all files
  files.forEach((file) => {
    formdata.append("my_files", file);
  });

  try {
    const { data } = await axios.post("http://localhost:5000/story/addstory", formdata, config);
    setSuccess("Story posted successfully, GOOD JOB!");

    clearInputs();
    setTimeout(() => {
      setSuccess("");
    }, 7000);
  } catch (error) {
    setTimeout(() => {
      setError("");
    }, 7000);
    setError(error.response?.data?.error || "An error occurred");
  }
};

  return (
    <div className="Inclusive-addStory-page ">
      <Link to={"/"}>
        <FiArrowLeft />
      </Link>
      <form onSubmit={handleSubmit} className="addStory-form">
        {error && <div className="error_msg">{error}</div>}
        {success && (
          <div className="success_msg">
            <span>{success}</span>
            <Link to="/" style={{ color: "bisque", fontWeight: "900" }}>
              Go home
            </Link>
          </div>
        )}

        <Row>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="title"
              required
              placeholder="Puppy name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              autoFocus={true}
            />
            <input
              className="inp"
              type="text"
              required
              id="age"
              placeholder="What is the age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
             <input
              className="inp"
              type="text"
              required
              id="price"
              placeholder="What is the price in $"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <input
              className="inp"
              type="text"
              id="color"
              placeholder="What is the color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            <select
              className="inp"
              id="sex"
              required
              placeholder="Select sex"
              onChange={(e) => setSex(e.target.value)}
              value={sex}
              style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="">Select sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Col>
          <Col md="6">
            <input
              className="inp"
              type="text"
              id="weight"
              placeholder="Puppy Weight"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
             <input
              className="inp"
              type="text"
              id="content"
              placeholder="write a little about the puppy"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </Col>
        </Row>
        <div className="StoryImageField">
                    <AiOutlineUpload />
                    <div className="txt">
                        {files.length > 0 
                          ? `${files.length} file(s) selected: ${files.map(f => f.name).join(", ")}` 
                          : "Include high-quality images (max 5) to make it more inviting to readers."}
                    </div>
                    <input
                        name="images"
                        type="file"
                        multiple
                        accept="image/*"
                        ref={imageEl}
                        onChange={handleFileChange} 
                    />
                </div>
        <button type="submit" className="addStory-btn">
          Publish{" "}
        </button>
      </form>
    </div>
  );
};

export default AddStory;