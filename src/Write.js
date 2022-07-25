import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Write = () => {
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
            margin: "10px 0px 0px 20px"
          }}
          onClick={() => {navigate("/api/search");}}
        />
      </div>
      <Box>
        <Container>
          <h2>작성하기</h2> <br />
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              제목
              <input
                type="text"
                placeholder="제목을 입력해주세요."
                style={{
                  margin: "10px 5px 10px 5px",
                  padding: "2px",
                  display: "block",
                  width: "200px",
                  height: "25px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "3px",
                }}
              />
            </div>
            <div 
                style={{
                  border: "1px solid #f1f3f4",
                  height: "30px",
                  margin: "auto 0",
                  borderRadius: "3px",
                  display: "flex", 
                  flexDirection: "row"
                }}
              >
                사진첨부
              </div>
            <div >
              <input
                placeholder="사진첨부"
                style={{
                  margin: "10px 5px 10px 5px",
                  padding: "2px",
                  display: "block",
                  width: "200px",
                  height: "25px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "3px",
                }}
              />
              
            </div>
            <input
              placeholder="URL"
              style={{
                margin: "10px 0px 20px 5px",
                padding: "2px",
                display: "block",
                width: "200px",
                height: "25px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
            <input
              placeholder="내용을 입력해주세요."
              style={{
                margin: "10px 0px 20px 5px",
                padding: "2px",
                display: "block",
                width: "200px",
                height: "100px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
            <input
              placeholder="# 해시태그"
              style={{
                margin: "10px 0px 10px 5px",
                padding: "2px",
                display: "block",
                width: "200px",
                height: "25px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                navigate("/user/login");
              }}
            >
              작성하기
            </Button>
          </div>
        </Container>
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 100%;
  height: 800px;
  display: flex; // flex는 부모 div에 해줘야 중앙 정렬됨!
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  width: 600px;
  height: 600px;
  display: flex; // 이 flex는 자기한테 먹이는 것!
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default Write;
