import styled from 'vue-styled-components'

export const ArticlesStyle = styled.div`
  padding-top: 50px;
  span,div.journal-desc { color: rgba(0,0,0,.54); transition: color 0.2s ease 0s; }
  h3 { margin-bottom: 1.5rem; }
  ul {
    list-style: none;
    padding: 0;
    margin-left: 10px;
    li {
      margin-bottom: 20px;
      a {
        color: hsla(0, 0%, 0%, 0.8);
        text-decoration: none;
        &:hover > h2.journal-title--h2 {
          color: black!important;
        }
        &:hover > div.journal-desc {
          color: rgba(0,0,0,.74);
        }
        div.journal-title {
          display: flex;
          align-items: center;
          img {
            margin: 0 10px 10px 0;
          }
        }
        h2.journal-title--h2 {
          margin-bottom: 10px;
          transition: color 0.2s ease 0s;
          font-family: 'libre-v1';
        }
      }
      p {
        margin: 0;
        line-height: 1.5;
        &:first-child {
          margin-top: 3px;
        }
      }
    }
  }
  span {
    font-size: 80%;
    padding: 0;
  }
`