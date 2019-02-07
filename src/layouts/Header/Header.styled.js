import styled from 'vue-styled-components'

export const HeaderWrapperStyle = styled.div`
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: white;
  border-bottom: 1px solid rgba(155, 155, 155, 0.26);
  padding: 5px 0px;
`

export const HeaderStyle = styled.header`
  width: 1040px;
  max-width: 100%;
  background-color: inherit;
  padding: 0px 40px;
  margin: 0px auto;
`

export const NavigationStyle = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: inherit;
  padding: 5px 0px;
  .nav__link {
    margin-left: 20px;
  }
`

export const HeaderLogoStyle = styled.div`
  display: flex;
  align-items: center;
  strong {
    display: inherit;
    align-items: center;
    font-size: 18px;
    a {
      text-decoration: none;
      color: black;
    }
    img {
      margin: 0 10px 0 0;
    }
  }
`

export const NavigationItemStyle = styled.ul`
  list-style-type: none;
  display: inline-flex;
  margin: 0px;
  li {
    margin: 0;
    a {
      font-size: 12px;
      font-weight: 500;
      color: rgb(153, 153, 153);
      text-transform: uppercase;
      padding: 10px 0px 10px 10px;
      transition: color 0.2s ease 0s;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
  }
`