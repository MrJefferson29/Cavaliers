import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import Loader from '../GeneralScreens/Loader';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";
import { Row, Col } from 'react-bootstrap'
import { AiOutlineUpload } from 'react-icons/ai'
import '../../Css/EditStory.css'

const EditStory = () => {
    const { config } = useContext(AuthContext)
    const slug = useParams().slug
    const imageEl = useRef(null)
    const [loading, setLoading] = useState(true)
    const [story, setStory] = useState({})
    const [files, setFiles] = useState([])
    const [previousImages, setPreviousImages] = useState([])
    const [title, setTitle] = useState('')
    const [age, setAge] = useState('')
    const [price, setPrice] = useState('')
    const [weight, setWeight] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('')
    const [sex, setSex] = useState('')
    const [availability, setAvailability] = useState('available')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {

        const getStoryInfo = async () => {
            setLoading(true)
            try {   
                const { data } = await axios.get(`https://cavaliers-t4tr.onrender.com/story/editStory/${slug}`, config)
                setStory(data.data)
                setTitle(data.data.title)
                setAge(data.data.age)
                setWeight(data.data.weight)
                setPrice(data.data.price)
                setContent(data.data.content)
                setColor(data.data.color || '')
                setSex(data.data.sex || '')
                setAvailability(data.data.availability || 'available')
                // Handle both old imageUrl and new imageUrls
                const images = data.data.imageUrls || (data.data.imageUrl ? [data.data.imageUrl] : [])
                setPreviousImages(images)
                setLoading(false)
            }
            catch (error) {
                navigate("/")
            }
        }
        getStoryInfo()
    }, [])

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 5) {
            setError("Maximum 5 images allowed");
            return;
        }
        setFiles(selectedFiles);
        setError("");
    };

    const removePreviousImage = (index) => {
        const newImages = previousImages.filter((_, i) => i !== index);
        setPreviousImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (files.length > 5) {
            setError("Maximum 5 images allowed");
            return;
        }

        const totalImages = previousImages.length + files.length;
        if (totalImages > 5) {
            setError("Total images cannot exceed 5");
            return;
        }

        if (!sex) {
            setError("Please select the sex");
            return;
        }

        const formdata = new FormData()
        formdata.append("title", title)
        formdata.append("content", content)
        formdata.append("age", age)
        formdata.append("weight", weight)
        formdata.append("price", price)
        formdata.append("color", color)
        formdata.append("sex", sex)
        formdata.append("availability", availability)
        formdata.append("previousImages", JSON.stringify(previousImages))
        
        // Append new files
        files.forEach((file) => {
            formdata.append("my_files", file);
        });

        try {
            const { data } = await axios.put(`https://cavaliers-t4tr.onrender.com/story/${slug}/edit`, formdata, config)

            setSuccess('Edit Story successfully ')

            setTimeout(() => {
                navigate('/')
            }, 2500)

        }
        catch (error) {
            setTimeout(() => {
                setError('')
            }, 4500)
            setError(error.response?.data?.error || "An error occurred")
        }
    }



    return (
        <>
            {
                loading ? <Loader /> : (
                    <div className="Inclusive-editStory-page ">
                        <form onSubmit={handleSubmit} className="editStory-form">

                            {error && <div className="error_msg">{error}</div>}
                            {success && <div className="success_msg">
                                <span>
                                    {success}
                                </span>
                                <Link to="/">Go home</Link>
                            </div>}

                            <Row>
                                <Col md="6">
                                    <input
                                        className="inp"
                                        type="text"
                                        required
                                        placeholder="Pet name"
                                        onChange={(e) => setTitle(e.target.value)}
                                        value={title}
                                        autoFocus={true}
                                    />

                                    <input
                                        className="inp"
                                        type="text"
                                        required
                                        placeholder="What is the Price"
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                    />
                                    <input
                                        className="inp"
                                        type="text"
                                        placeholder="pet's age"
                                        onChange={(e) => setAge(e.target.value)}
                                        value={age}
                                    />
                                </Col>
                                <Col md="6">
                                    <input
                                        className="inp"
                                        type="text"
                                        placeholder="pet's Weight"
                                        onChange={(e) => setWeight(e.target.value)}
                                        value={weight}
                                    />
                                    <input
                                        className="inp"
                                        type="text"
                                        placeholder="pet's Color"
                                        onChange={(e) => setColor(e.target.value)}
                                        value={color}
                                    />
                                    <select
                                        className="inp"
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
                                    <select
                                        className="inp"
                                        onChange={(e) => setAvailability(e.target.value)}
                                        value={availability}
                                        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    >
                                        <option value="available">Available</option>
                                        <option value="reserved">Reserved</option>
                                        <option value="adopted">Adopted</option>
                                    </select>
                                </Col>
                            </Row>

                            <CKEditor
                                editor={ClassicEditor}
                                onChange={(e, editor) => {
                                    const data = editor.getData();
                                    setContent(data)
                                }}
                                data={content}

                            />

                            {previousImages.length > 0 && (
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Current Images ({previousImages.length}/5):</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                        {previousImages.map((img, index) => (
                                            <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                                                <img 
                                                    src={img} 
                                                    alt={`storyImage ${index + 1}`}
                                                    style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removePreviousImage(index)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '5px',
                                                        right: '5px',
                                                        background: 'red',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '50%',
                                                        width: '25px',
                                                        height: '25px',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div class="StoryImageField">
                                <AiOutlineUpload />
                                <div class="txt">
                                    {files.length > 0 
                                      ? `${files.length} new file(s) selected: ${files.map(f => f.name).join(", ")}` 
                                      : "Add more images (max 5 total)"}
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

                            <button type='submit' className='editStory-btn'
                            >Edit Story </button>
                        </form>

                    </div>
                )
            }
        </>
    )
}

export default EditStory;
