import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img
          className="natubeImage"
          alt="natube"
          src="/image/나투브.png"
          style={{
            width: "6vw",
            height: "6vh",
            margin: "10px 0px 0px 20px",
          }}
          onClick={() => {
            navigate("/search");
          }}
        />
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "25vw" }}>
          <Button
            onClick={() => {
              navigate("/update");
            }}
          >
            수정하기
          </Button>
          <Button
            onClick={() => {
              navigate("/search");
            }}
          >
            삭제하기
          </Button>
        </div>
      </div>
      <Box>
        <Container>
          <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "14px", padding: "10px" }}>닉네임</div>
          <div
            style={{
              width: "300px",
              height: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 10px 0px 10px",
              border: "1px solid #1a237e"
            }}
          >
            URL
          </div>
          </div>
          <div>
          <div style={{ width: "390px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <p style={{ fontSize: "18px", display: "inline-block" }}>제목</p>
            <p style={{ fontSize: "12px", display: "inline-block" }}>#해시태그 키워드1 </p>
            <p style={{ fontSize: "12px", display: "inline-block" }}>#해시태그 키워드2 </p>
          </div>
          <div style={{ width: "390px", display: "flex", padding: "10px"}}>내용</div>
          <div style={{ width: "390px", height: "190px", fontSize: "15px", padding: "10px" }}>내용 보여주기</div>
          </div>
        </Container>
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  width: 750px;
  height: 330px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  
`;

const Button = styled.button`
  background-color: #f1f3f4;
  border: none;
  border-radius: 20px;
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
  margin-top: 20px;
`;

export default Detail;
