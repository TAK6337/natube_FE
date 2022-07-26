import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



const Search = (onChange, onClick) => {
  const navigate = useNavigate();

  // const logout = () => {
    
  // };

  return (
    <>

      <div className="Blank"
        style={{
          width: "62vw",
          display: "flex",
          flexFlow: "row-nowrap",
          justifyContent: "flex-end",

        }}
      >
        <Button onClick={() => {
          navigate("/");
        }}>글쓰기</Button>

        <Button onClick={() => {
          navigate("/")
        }}>로그아웃
        </Button>
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "18px",
        }}
      >
        <div
          style={{
            width: "35vw",
            height: "33vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img className="natubeImage" alt="natube" src="image/나투브.png"
            style={{
              width: "30vw",
              height: "30vh",
              margin: "20px"

            }} />
        </div>
      </div>
  

        <input type="search"
          placeholder="검색해라"
          onChange={onChange}
          style={{
            width: "29vw",
            size: "10px",
            maxLength: "10px",
            borderRadius: "16px",
            borderWidth: "3px",
            padding: "7px",
            margin: "0px -55px 2px 640px",
            fontSize: "16px"
          }} />

        <button type="button" onClick={onClick}
          style={{
            borderRadius: "10px",
            cursor: "pointer"
          }}>검색</button>

<Box>
  <Container>

          

  </Container>
</Box>


    </>


  );

}

const Button = styled.div`
background-color: white;
border: 1px solid white;
color: #3c4043;
font-size: 15px;
line-height: 27px;
text-align: center;
cursor: pointer;
user-select: none;
margin: 5px;


`;

const Box = styled.div`
  width: 50%;
  height: 500px;
  display: flex; // flex는 부모 div에 해줘야 중앙 정렬됨!
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  height: 300px;
  display: flex; // 이 flex는 자기한테 먹이는 것!
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;


export default Search;