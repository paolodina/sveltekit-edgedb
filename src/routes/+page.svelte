<div class="header">
  <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
    <a class="pure-menu-heading" href="/">Your logo</a>

    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a href="/blog" class="pure-menu-link">Blog</a></li>
    </ul>
  </div>
</div>

<div class="splash-container">
  <div class="splash">
    <h1 class="splash-head">Welcome</h1>
    <p class="splash-subhead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p>
      <a href="/blog" class="pure-button pure-button-primary">Blog</a>
    </p>
  </div>
</div>

<style>
  p {
    margin: 1rem;
    padding: 1rem;
  }
  .pure-button {
    background-color: #1f8dd6;
    color: white;
    padding: 0.5em 2em;
    border-radius: 5px;
  }

  a.pure-button-primary {
    background: white;
    color: #1f8dd6;
    border-radius: 5px;
    font-size: 120%;
  }

  .home-menu {
    padding: 0.5em;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .home-menu {
    background: #2d3e50;
  }
  .pure-menu.pure-menu-fixed {
    z-index: 4;
    border-bottom: none;
  }

  .home-menu .pure-menu-heading {
    color: white;
    font-weight: 400;
    font-size: 120%;
  }

  .home-menu .pure-menu-selected a {
    color: white;
  }

  .home-menu a {
    color: #6fbef3;
  }
  .home-menu li a:hover,
  .home-menu li a:focus {
    background: none;
    border: none;
    color: #aecfe5;
  }

  .splash-container {
    background: #1f8dd6;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed !important;
  }
  .splash {
    width: 80%;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
  }
  .splash-head {
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 3px solid white;
    padding: 1em 1.6em;
    font-weight: 100;
    border-radius: 5px;
    line-height: 1em;
  }
  .splash-subhead {
    color: white;
    letter-spacing: 0.05em;
    opacity: 0.8;
  }
  @media (min-width: 48em) {
    .home-menu {
      text-align: left;
    }
    .home-menu ul {
      float: right;
    }
    .splash {
      width: 50%;
      height: 50%;
    }

    .splash-head {
      font-size: 250%;
    }
  }

  @media (min-width: 78em) {
    .splash-head {
      font-size: 300%;
    }
  }
</style>
