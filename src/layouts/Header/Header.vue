<template>
<header-wrapper-style>
  <header-style>
    <navigation-style>
      <header-logo-style>
        <strong>
          <g-image alt="logo_blog" src="~/favicon.png" width="26" />
          <g-link :to="{ name: 'home' }">{{ $static.metaData.siteName }}</g-link>
        </strong>
      </header-logo-style>
      <navigation-item-style>
        <li>
          <g-link class="nav__link" :to="{ name: 'support' }">Supports</g-link>
        </li>
        <li>
          <g-link class="nav__link" :to="{ name: 'about' }">About Me</g-link>
        </li>
      </navigation-item-style>
    </navigation-style>
  </header-style>
</header-wrapper-style>
</template>
<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>
<script>
import {
  HeaderWrapperStyle,
  HeaderStyle,
  NavigationStyle,
  HeaderLogoStyle,
  NavigationItemStyle
  } from './Header.styled.js'

export default {
  components: {
    'header-wrapper-style': HeaderWrapperStyle,
    'header-style': HeaderStyle,
    'navigation-style': NavigationStyle,
    'header-logo-style': HeaderLogoStyle,
    'navigation-item-style': NavigationItemStyle
  }
}
</script>
