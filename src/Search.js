import React from 'react'
// import { Button } from '@mui/material';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {onChange, onClick} from 'react'



const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const keyword = React.useRef(null);

  const names = useSelector((state) => state.Names.list);
  console.log(names);


  // const logout = () => {
    
  // };

  return (
    <>

      <div className="Blank"
        style={{
          width: "90vw",
          display: "flex",
          flexFlow: "row-nowrap",
          justifyContent: "flex-end",
          marginTop: "10px"
        }}
      >
        <Button onClick={() => {
          navigate("/write");
        }}>글쓰기</Button>

        <Button onClick={() => {
          navigate("/login")
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


          <img className="natubeImage" alt="natube" src="/image/나투브.png"
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

{/* <Box>
  <Container>
          <div style={{
                            height: "130px",        
                            width: "270px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "-150px 0px 0px 0px",
                            border: "2px solid #1a237e"
          }}>사진
          </div>

          <div style={{
              height: "3px",
              width: "80px",
              display: "flex",
              flexDirection: "column",
              
          }}>
            <h3>제목</h3>
            <p>해쉬태그</p>
            <p>닉네임</p>
          </div>
  </Container>
</Box> */}

<Cardstyle>
  {names.map((list, index) => {
    return (
      <div key={index} id={list.id}>

        <Ha classname="list_item">
        <div style={{
                            height: "130px",        
                            width: "270px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "-150px 0px 0px 0px",
                            border: "2px solid #1a237e"
          }}>{list.imageUrl}
          </div>
          
          <p>{list.postId}</p>
          <h3>{list.title}</h3>
          <p>{list.hashTag}</p>
          <p>{list.nickname}</p>
        </Ha>

      </div>

    )
  }
  )}
</Cardstyle>

    </>


  );

}

const Button = styled.div`
background-color: white;
border: 1px solid white;
color: #3c4043;
font-size: 17px;
line-height: 27px;
text-align: center;
cursor: pointer;
user-select: none;
margin: 5px;


`;

const Ha = styled.div`
  width: 50%;
  height: 500px;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Cardstyle = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;


export default Search;