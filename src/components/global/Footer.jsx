import React from 'react'

function Footer() {
  return (
    <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
        <h1 className="Logo">
          Youxo
        </h1>
        </div>
        <div class="footer-links">
          <ul class="footer-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-social">
          <ul class="social-icons">
            <li><a target='_blank' href="https://www.facebook.com/profile.php?id=100015338087618"><i class="fab fa-facebook-f"></i></a></li>
            <li><a target='_blank' href="https://twitter.com/yassinyassinex4"><i class="fab fa-twitter"></i></a></li>
            <li><a target='_blank' href="https://www.instagram.com/yassin_elhardofi/"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/yassin-ait-elhardouf-676974247/" target='_blank'><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; Made with <span className="heart">❤</span> by <a className='NoEffect' target='_blank' href="https://www.instagram.com/yassin_elhardofi/">Yassine</a> & Othmane</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer