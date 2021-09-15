import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Link } from "react-router-dom";
import Mainboard from "./Mainboard";
import unsplash from "../api/unsplash";
function LoginPage(props) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  const [pins, setNewPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["ocean", "Tokyo", "dogs"];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          console.log(results);
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoWrapper>
        <LogoText>Pinterest</LogoText>
        <TextWrapper>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "15px",
              textDecoration: "none",
            }}
          >
            <li>About</li>
            <li>Business</li>
            <li>Press</li>
          </ul>
        </TextWrapper>
        <HomePageButton>
          <Link to="/">
            <a>Login</a>
          </Link>
        </HomePageButton>
        <FollowingButton>
          <Link to="/">
            <a>Sign-Up</a>
          </Link>
        </FollowingButton>
      </Wrapper>
      <TitleWrapper>
        Get your next
        <Content>chai time snacks idea</Content>
      </TitleWrapper>
      <BodyWrapper>
        <Mainboard pins={pins} />
      </BodyWrapper>
    </>
  );
}
export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  // height: 56px;
  // padding: 12px 4px 4px 16px;
  padding-top: 100px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background-color: white;
  color: black;
`;
const TitleWrapper = styled.div`
  text-align: center;
  background-color: white;
  color: black;
  font-size: 60px;
  font-weight: 600;
`;
const Content = styled.div`
  text-align: center;
  background-color: white;
  color: rgb(194, 139, 0);
  font-size: 60px;
  font-weight: 600;
`;
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomePageButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(230, 0, 35);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

const FollowingButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  font-weight: 700;
`;
const LogoText = styled.div`
  color: #e60023;
  font-weight: bold;
  font-size: 20px;
`;
