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
      <div class="navigation__item">
        <li>
          <g-link class="nav__link" :to="{ name: 'support' }">Supports</g-link>
        </li>
        <li>
          <g-link class="nav__link" :to="{ name: 'about' }">About Me</g-link>
        </li>
      </div>
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
