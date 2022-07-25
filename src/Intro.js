import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Intro = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "180px",
        }}
      >
        <div
          style={{
            width: "35vw",
            height: "40vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            className="natubeImage"
            alt="natube"
            src="image/나투브.png"
            style={{
              width: "30vw",
              height: "30vh",
            }}
          />

          <div
            style={{
              width: "280px",
              marginLeft: "auto"
            }}
          >
            <Button
              onClick={() => {
                navigate("/user/login");
              }}
              style={{ marginRight: "5px" }}
            >              
              로그인
            </Button>
            <Button
              onClick={() => {
                navigate("/user/signup");
              }}
            >
              회원가입
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Button = styled.button`
  background-color: white;
  border: 1px solid white;
  border-radius: 4px;
  color: #3c4043;
  font-family: Apple SD Gothic Neo, arial, sans-serif;
  font-size: 15px;
  margin: 0px 3px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

export default Intro;