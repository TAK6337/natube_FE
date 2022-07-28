import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";


const Write = (props) => {

  const title = React.useRef(null);
  const ytUrl = React.useRef(null);
  const content = React.useRef(null);
  const hashTag = React.useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postId = () => {
    axios.post("http://13.209.65.84:8080/api/post", 
    { title: title.current.value,
      ytUrl: ytUrl.current.value,
      content: content.current.value,
      hashTag: hashTag.current.value,}
    ).then(response => {
      console.log(response)
      window.alert("작성 완료!")
      navigate("/detail")
      //if로 성공 or 실패 핸들링 
    });
  }

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
      <Box>
        <Container>
          <h2 style={{ color: "#004dcf" }}>작성하기</h2> <br />
          <div
            style={{
              width: "350px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <p style={{ color: "#004dcf", fontWeight: "bold" }}>제목</p>
              <input
                type="text"
                ref={title}
                placeholder="제목을 입력해주세요."
                style={{
                  margin: "10px 5px 10px 10px",
                  padding: "5px",
                  width: "240px",
                  height: "25px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "3px"
                }}
              />
            </div>
            {/* <div
              style={{
                height: "40px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#004dcf", fontWeight: "bold" }}>사진첨부</p>
              <input
                type="file"
                ref={imageUrl}
                placeholder="사진첨부"
                style={{
                  margin: "10px 5px 10px 10px",
                  padding: "5px",
                  width: "200px",
                  height: "25px",
                  borderRadius: "3px",                  
                }}
              />
            </div> */}
            <input
              placeholder="영상 URL"
              ref={ytUrl}
              style={{
                margin: "10px 0px 20px 5px",
                padding: "5px",
                width: "290px",
                height: "25px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
            <textarea
              ref={content}
              placeholder="내용을 입력해주세요."
              style={{
                margin: "10px 0px 20px 5px",
                padding: "5px",
                width: "290px",
                height: "100px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
                resize: "none",
                fontSize: "15px",
              }}
            />
            <input
              ref={hashTag}
              placeholder="# 해시태그"
              style={{
                margin: "10px 0px 10px 5px",
                padding: "5px",
                width: "290px",
                height: "25px",
                border: "1px solid #d9d9d9",
                borderRadius: "3px",
              }}
            />
          </div>
          <div>
            <Button

              onClick={postId}
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  width: 450px;
  height: 650px;
  display: flex;
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
