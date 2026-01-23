import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import "../../Css/Home.css"
const Shelter = () => {
  const search = useLocation().search
  const searchKey = new URLSearchParams(search).get('search')
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);


  useEffect(() => {
    const getStories = async () => {

      setLoading(true)
      try {

        const { data } = await axios.get(`http://localhost:5000/story/getAllStories?search=${searchKey || ""}&page=${page}`)

        if (searchKey) {
          navigate({
            pathname: '/',
            search: `?search=${searchKey}${page > 1 ? `&page=${page}` : ""}`,
          });
        }
        else {
          navigate({
            pathname: '/all-pets',
            search: `${page > 1 ? `page=${page}` : ""}`,
          });


        }
        setStories(data.data)
        setPages(data.pages)

        setLoading(false)
      }
      catch (error) {
        setLoading(true)
      }
    }
    getStories()
  }, [setLoading, search, page, navigate])


  useEffect(() => {
    setPage(1)
  }, [searchKey])


  return (
    <Container>
      {loading ? (
        <SkeletonContainer>
          {[...Array(6)].map(() => (
            <SkeletonStory key={uuidv4()} />
          ))}
        </SkeletonContainer>
      ) : (
        <ContentWrapper>
          <CardsGrid>
            {stories.length !== 0 ? (
              stories.map((story) => (
                <CardStory key={uuidv4()} story={story} />
              ))
            ) : (
              <NoStories />
            )}
          </CardsGrid>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </ContentWrapper>
      )}
    </Container>
  )

};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f0;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    gap: 2rem;
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
`;

export default Shelter;