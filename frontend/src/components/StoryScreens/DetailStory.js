import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiMail, FiHeart } from "react-icons/fi";
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit, FiArrowLeft } from 'react-icons/fi'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmarkPlus, BsThreeDots, BsBookmarkFill } from 'react-icons/bs'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const DetailStory = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [story, setStory] = useState({});
  const [storyLikeUser, setStoryLikeUser] = useState([]);
  const [sidebarShowStatus, setSidebarShowStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const slug = useParams().slug;
  const [storyReadListStatus, setStoryReadListStatus] = useState(false);
  const navigate = useNavigate();

  const handleEmailClick = () => {
    const email = "crownpupcavaliers@gmail.com";
    const subject = `Purchase of ${story.name}`;
    const body =
      `Dear Adoption Team,\n\n` +
      `I am interested in adopting ${story.name} as part of my family\n\n` +
      `Could you please provide more details regarding its availability and delivery arrangements?\n\n` +
      `Thank you!\n\n` +
      `[Your Name]`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const getDetailStory = async () => {
      setLoading(true);
      var activeUser = {};
      try {
        const { data } = await axios.get("https://cavaliers-t4tr.onrender.com/auth/private", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        activeUser = data.user;
        setActiveUser(activeUser);
      } catch (error) {
        setActiveUser({});
      }

      try {
        const { data } = await axios.post(`https://cavaliers-t4tr.onrender.com/story/${slug}`, { activeUser });
        setStory(data.data);
        setLikeStatus(data.likeStatus);
        setLikeCount(data.data.likeCount);
        setStoryLikeUser(data.data.likes);
        setLoading(false);

        const story_id = data.data._id;

        if (activeUser.readList) {
          if (!activeUser.readList.includes(story_id)) {
            setStoryReadListStatus(false);
          } else {
            setStoryReadListStatus(true);
          }
        }
      } catch (error) {
        setStory({});
        navigate("/not-found");
      }
    };
    getDetailStory();
  }, [slug, setLoading]);

  const handleLike = async () => {
    setTimeout(() => {
      setLikeStatus(!likeStatus);
    }, 1500);

    try {
      const { data } = await axios.post(`https://cavaliers-t4tr.onrender.com/story/${slug}/like`, { activeUser }, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      setLikeCount(data.data.likeCount);
      setStoryLikeUser(data.data.likes);
    } catch (error) {
      setStory({});
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post")) {
      try {
        await axios.delete(`https://cavaliers-t4tr.onrender.com/story/${slug}/delete`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editDate = (createdAt) => {
    const d = new Date(createdAt);
    var datestring = d.toLocaleString('eng', { month: 'long' }).substring(0, 3) + " " + d.getDate();
    return datestring;
  };

  const addStoryToReadList = async () => {
    try {
      const { data } = await axios.post(`https://cavaliers-t4tr.onrender.com/user/${slug}/addStoryToReadList`, { activeUser }, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      setStoryReadListStatus(data.status);
      document.getElementById("readListLength").textContent = data.user.readListLength;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GunDetailsStyles>
      <div className="carousel-wrapper">
        {story && story.slug ? (
          <div className="top_story_transactions">
            {!!activeUser?._id && (
              <Link className='editStoryLink' to={`/story/${story.slug}/edit`}>
                <FiEdit />
              </Link>
            )}
            {activeUser && story.author && story.author._id === activeUser._id ? (
              <span className='deleteStoryLink' onClick={handleDelete}>
                <RiDeleteBin6Line />
              </span>
            ) : null}
          </div>
        ) : null}
        {(() => {
          // Get images - support both old imageUrl and new imageUrls
          const images = story.imageUrls && story.imageUrls.length > 0 
            ? story.imageUrls 
            : (story.imageUrl ? [story.imageUrl] : []);
          
          if (images.length > 1) {
            return (
              <Slider {...sliderSettings}>
                {images.map((img, index) => (
                  <div key={index} className="slide">
                    <img
                      src={img}
                      alt={`${story.title} - Image ${index + 1}`}
                      className="carousel-img"
                    />
                  </div>
                ))}
              </Slider>
            );
          } else {
            return (
              <div className="slide">
                <img
                  src={images[0] || '/default.jpg'}
                  alt={story.title}
                  className="carousel-img"
                />
              </div>
            );
          }
        })()}
      </div>
      <div className="details-content">
        <h1 className="name">{story.title}</h1>
        <p className="description">{story.content}</p>
        <div className="info">
          <div className="info-left">
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              <strong style={{ color: "#1e3d33" }}>Price:</strong> <span style={{ color: "#2d5a4a", fontWeight: "bold" }}>$ {story.price}</span>
            </p>
            <p>
              <strong style={{ color: "#1e3d33" }}>Weight:</strong> {story.weight} lbs
            </p>
            {story.sex && (
              <p>
                <strong style={{ color: "#1e3d33" }}>Sex:</strong> {story.sex.charAt(0).toUpperCase() + story.sex.slice(1)}
              </p>
            )}
            {story.age && (
              <p>
                <strong style={{ color: "#1e3d33" }}>Age:</strong> {story.age}
              </p>
            )}
            {story.color && (
              <p>
                <strong style={{ color: "#1e3d33" }}>Color:</strong> {story.color}
              </p>
            )}
            <p>
              <strong style={{ color: "#1e3d33" }}>Availability:</strong> 
              <span style={{ 
                color: story.availability === 'available' ? '#155724' : 
                       story.availability === 'reserved' ? '#856404' : '#721c24',
                fontWeight: 'bold',
                marginLeft: '0.5rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '12px',
                backgroundColor: story.availability === 'available' ? '#e8f5e8' : 
                                story.availability === 'reserved' ? '#fff3cd' : '#f8d7da'
              }}>
                {(story.availability || 'available').charAt(0).toUpperCase() + (story.availability || 'available').slice(1)}
              </span>
            </p>
            <p style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e8e8e0' }}>
              <strong style={{ color: "#1e3d33" }}>Health Status:</strong> <span style={{ color: "#2d5a4a" }}>Healthy and Vetted</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hero-box">
        <FiHeart
          onClick={handleLike}
          style={{
            color: '#fff',
            fill: likeStatus ? "#fff" : "transparent",
            fontSize: "2rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
        <div
          className="block"
          onClick={handleEmailClick}
        >
          <FiMail
            style={{ fontSize: "2.4rem", marginRight: "1.5rem" }}
            className="mail"
          />
          <button className="send">
            Message
          </button>
        </div>
      </div>
    </GunDetailsStyles>
  );
};

export default DetailStory;

const GunDetailsStyles = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  padding: 2rem 1rem;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
  margin-top: 70px;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .carousel-wrapper {
    width: 100%;
    margin-bottom: 2rem;
    overflow: hidden;
    background-color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 0.5rem;

    @media (min-width: 768px) {
      padding: 0.75rem;
    }

    @media (min-width: 1024px) {
      padding: 1rem;
    }
  }

  .carousel-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    transition: transform 0.3s ease-in-out;

    @media (min-width: 768px) {
      height: 400px;
    }

    @media (min-width: 1024px) {
      height: 500px;
    }
  }

  .carousel-img:hover {
    transform: scale(1.02);
  }

  .details-content {
    width: 100%;
    background-color: #fff;
    border: 2px solid #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 5rem;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 2rem;
    }

    @media (min-width: 1024px) {
      padding: 2.5rem;
    }
  }

  .name {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #1e3d33;
    line-height: 1.3;

    @media (min-width: 768px) {
      font-size: 2.2rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  .description {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #333;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.15rem;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 400;
    color: #333;
  }

  .info-left {
    padding-bottom: 1rem;
  }

  .info-left p {
    margin: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .hero-box {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    background-color: #1e3d33;
    color: #fff;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px 12px 0 0;

    @media (min-width: 768px) {
      padding: 1.25rem 2rem;
      max-width: 700px;
    }
  }

  .mail {
    color: #fff;
    transition: color 0.3s ease;
  }

  .block {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .send {
    background-color: #fff;
    transition: all 0.3s ease;
    border: none;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    color: #1e3d33;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;

    @media (min-width: 768px) {
      padding: 0.75rem 2rem;
      font-size: 1.1rem;
    }
  }

  .send:hover {
    background-color: #f5f5f0;
    transform: scale(1.05);
  }

  .top_story_transactions {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-top: 70px;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .top_story_transactions a {
    color: #1e3d33;
    transition: color 0.3s ease;
  }

  .top_story_transactions a:hover {
    color: #2d5a4a;
  }

  .top_story_transactions span {
    color: #d32f2f;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .top_story_transactions span:hover {
    color: #b71c1c;
  }

  .BsThreeDots_opt:hover .delete_or_edit_story {
    display: flex;
  }

  .delete_or_edit_story {
    cursor: pointer;
    position: absolute;
    top: -50px;
    background-color: white;
    box-shadow: 0 0 10px rgba(204, 204, 204, 0.6);
    right: 0px;
    border-radius: 6px;
    padding: 0.6rem 10px 0;
    font-size: 0.7rem;
    display: none;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .delete_or_edit_story p {
    color: black;
    font-family: 'Inter';
    font-weight: bold;
    padding: 0;
    text-decoration: none;
  }

  .delete_or_edit_story a {
    text-decoration: none;
  }

  /* Slick carousel customization */
  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    color: #1e3d33;
    font-size: 12px;
  }

  .slick-dots li.slick-active button:before {
    color: #2d5a4a;
  }
`;
