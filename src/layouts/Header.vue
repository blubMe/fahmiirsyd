<template>
<div class="header-wrapper">
  <header class="header">
    <nav class="navigation">
      <div class="header__logo">
        <strong>
          <g-image alt="logo_blog" src="~/favicon.png" width="26" />
          <g-link :to="{ name: 'home' }">{{ $static.metaData.siteName }}</g-link>
        </strong>
      </div>
      <ul class="navigation__item">
        <li>
          <g-link class="nav__link" :to="{ name: 'support' }">Supports</g-link>
        </li>
        <li>
          <g-link class="nav__link" :to="{ name: 'about' }">About Me</g-link>
        </li>
      </ul>
    </nav>
  </header>
</div>
</template>
<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>
<style lang="scss" scoped>
  .header-wrapper {
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: white;
  border-bottom: 1px solid rgba(155, 155, 155, 0.26);
  padding: 5px 0px;
}

.header {
  width: 1040px;
  max-width: 100%;
  background-color: inherit;
  padding: 0px 40px;
  margin: 0px auto;
}

.header__logo {
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
}

.navigation {
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
}

.navigation__item {
  list-style-type: none;
  display: inline-flex;
  margin: 0px;
  li {
    margin: 0;
    a {
      font-size: 12px;
      font-weight: 700;
      color: hsla(0, 0%, 0%, .6);
      text-transform: uppercase;
      padding: 10px 0px 10px 10px;
      transition: color 0.2s ease 0s;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
  }
}
</style>
