<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a href="#" class="nav-link">Home</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
name: 'Navigation'
}
</script>
