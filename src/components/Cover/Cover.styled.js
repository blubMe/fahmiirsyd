import styled from 'vue-styled-components'

export const CoverStyle = styled.div`
  /* background-color: yellow; */
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`

export const CoverTitleStyle = styled.div`
  h1 {
    font-size: 70px;
    font-family: "libre-v1";
  }
  p {
    padding-top: 30px;
    max-width: 40vw;
    font-size: 18px;
  }
`

export const CoverImageStyle = styled.div`
  position: relative;
  max-height: 340px;
  overflow: hidden;
  border-radius: 3px;
  div {
    position: absolute;
    top: 0;
    margin: 10px;
    span {
      display: block;
      color: white;
      font-weight: bold;
      padding: 5px 10px;
      margin: 5px;
      /* background-color: rgba(0,0,0,.62); */
      background-color: black;
      border-radius: 3px;
      max-width: 260px;
    }
  }
  img {
    border-radius: 3px;
    -webkit-user-drag: none;
  }
`