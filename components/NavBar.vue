<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Nuxt</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " exact active-class = "active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" no-prefetch active-class = "active" to="/users">Users</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" active-class = "active" to="/about">About</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" active-class = "active" to="/login">login</nuxt-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>