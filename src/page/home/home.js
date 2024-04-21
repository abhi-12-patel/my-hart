import React from "react";
function Home() {
  return (
<>
<div id="menu-btn" className="fas fa-bars"></div>



<div id="theme-toggler" className="fas fa-moon"></div>



<section className="home" id="home">
    
    <div className="content">
        <h3>Jashoda Vasava</h3>
        <p>my profile</p>
        <a href="#" className="btn">download</a>
    </div>

    <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-pinterest"></a>
    </div>

</section>
</>
  );
}

export default Home;
