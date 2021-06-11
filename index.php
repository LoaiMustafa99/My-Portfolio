<?php $indexstyle = true; include ("includes/header.php");?>

<?php include("includes/loading.php") ?>

<?php $tophome = true; require_once("includes/top_nav.php"); ?>
<!-- Start Settings Box -->
<div class="settings-box">
    <div class="toggle-settings">
        <i class="fas fa-cog fa-spin"></i>
    </div>
    <div class="setting-container">
        <div class="option-box">
            <h4>Colors</h4>
            <ul class="color-list">
                <li class="active" data-color="#FF9800"></li>
                <li data-color="#E91E63"></li>
                <li data-color="#009688"></li>
                <li data-color="#03A9F4"></li>
                <li data-color="#4CAF50"></li>
            </ul>
        </div>
        <div class="option-box">
            <h4>Show Bullets</h4>
            <div class="bullets-option">
                <span class="yes active" data-display="show">Yes</span>
                <span class="no" data-display="hide">No</span>
            </div>
        </div>
    </div>
</div>
<!-- End Settings Box -->

<!-- Start Nav Bullets -->
<div class="nav-bullets">
    <div class="bullet" data-section=".about-us">
        <div class="tooltip">About Us</div>
    </div>
    <div class="bullet" data-section=".skills">
        <div class="tooltip">Our Skiils</div>
    </div>
    <div class="bullet" data-section=".gallery">
        <div class="tooltip">Our Gallery</div>
    </div>
    <div class="bullet" data-section=".timeline">
        <div class="tooltip">Timeline</div>
    </div>
    <div class="bullet" data-section=".resume">
        <div class="tooltip">My Resume</div>
    </div>
    <div class="bullet" data-section=".features">
        <div class="tooltip">our Features</div>
    </div>
    <div class="bullet" data-section=".contact-my">
        <div class="tooltip">Contact US</div>
    </div>
</div>
<!-- End Nav Bullets -->

<!-- Start Landing Page -->
<div class="landing-page" data-vide-bg="180825_01_laptop">
    <div class="overlay"></div>
    <div class="introduction-text">
        <h1>I'm Loai Mustafa</h1>
        <p>I Am a <span class="animate"></span></p>
    </div>
</div>
<!-- End Landing Page -->

<!-- Start About Us -->
<div class="container">
    <div class="about-us">
        <div class="info-box">
            <h2 class="main-header"><span>ABOUT MY</span> </h2>
            <p>My name is Luay, I am 22 and I live in Amman, Jordan. I am single and I graduated with a master’s degree in computer science from Al-Bayt University, and at the moment I work web developer.
                <br> My hobbies are swimming, horse riding and reading.</p>

            <p> My dream was from a young age to be a programmer. I pursued this dream and fulfilled it after trouble and exhaustion. Of course, I do not forget the encouragement of my father and mother.</p>
        </div>
        <div class="image-box">
            <img src="images/my-photo.jpg" alt="">
        </div>
    </div>
</div>
<!-- End About Us -->

<!-- Strat Our Skills -->
<div class="skills">
    <div class="containers">
        <h2 class="main-header"><span>My SKILLS</span></h2>
        <div class="my-skills">
            <div class="skills-box" style="margin-right: 18px;">
                <div class="skills-main-header">Technical Skills</div>
                <div class="tec-skills">
                    <div class="right">
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">PHP</div>
                                <div>80%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="80%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">MySQL and SQL Commands</div>
                                <div>70%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="70%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">OOP and MVC Pattern</div>
                                <div>75%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="75%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">C++</div>
                                <div>50%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="50%"></span>
                            </div>
                        </div>
                    </div>
                    <div class="left">
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">HTML and CSS</div>
                                <div>75%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="75%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">Javascript and JQuery</div>
                                <div>45%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="40%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">AJAX and JSON</div>
                                <div>60%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="60%"></span>
                            </div>
                        </div>
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">Git Command and Github</div>
                                <div>60%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="60%"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skills-box">
                <div class="skills-main-header">Languages</div>
                <div class="language-skills">
                    <div class="right">
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">Arabic</div>
                                <div>100%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="100%"></span>
                            </div>
                        </div>
                    </div>
                    <div class="left">
                        <div class="skill-box">
                            <div class="name">
                                <div class="lang">English</div>
                                <div>60%</div>
                            </div>
                            <div class="skill-progress">
                                <span data-progress="60%"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Our Skills -->

<!-- Start Resume -->
<div class="resume">
    <div class="overlay"></div>
    <div class="container">
        <div class="header-resume">
            <h2 class="main-header"><span>My Resume</span></h2>
            <div></div>
            <p>To view my resume, click on the download button below</p>
            <a href="images/Loai_Mustafa%20Abd-Elqader_Resume.pdf" download="download" class="download-resume">Download Resume</a>
        </div>
    </div>
</div>
<!-- End Resume -->



<!-- Start Timeline -->
<div class="timeline">
    <div class="container">
        <h2 class="main-header" style="text-align:center"><span>MY EDUCATION</span> </h2>
        <div class="timeline-content">
            <div class="year">2018 - Present</div>

            <div class="left">
                <div class="content">
                    <h3>Bachelor Degree</h3>
                    <span>Al-AlBayt University</span>
                    <span>Computer Science Major</span>
                    <span>
                        <strong>IT College</strong>
                        &nbsp; Feb 2018 - Present
                        
                    </span>
                    <span>B.CS</span>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>
<!-- End Timeline -->
<!-- Start Features -->
<div class="features">
    <h2 class="main-header"><span> Our Features</span></h2>
    <div class="container">
        <div class="feat-box">
            <img src="images/icon_p1.png" alt="">
            <h4>Development</h4>
        </div>
        <div class="feat-box">
            <img src="images/icon_p2.png" alt="">
            <h4>Poblem Solving</h4>
        </div>
        <div class="feat-box">
            <img src="images/icon_p5.png" alt="">
            <h4>Searching</h4>
        </div>
        <div class="feat-box">
            <img src="images/icon_p4.webp" alt="">
            <h4>Self Learning</h4>
        </div>
        <div class="feat-box">
            <img src="images/icon_p4.png" alt="">
            <h4>Team Work</h4>
        </div>
        <div class="feat-box">
            <img src="images/icon_p6.png" alt="">
            <h4>Hard Working</h4>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- End Features -->

<!-- Start Contact Us -->
<div class="contact-my">
    <h2>Contact Me</h2>
    <div class="social-media">
        <a class="facebook" href="https://www.facebook.com/loai.moustfa/"><i class="fab fa-facebook-square"></i></a>
        <a class="twitter" href="https://twitter.com/loaimustafa3"><i class="fab fa-twitter-square"></i></a>
        <a class="github" href="https://github.com/LoaiMustafa99"><i class="fab fa-github"></i></a>
        <a class="linkedin" href="https://www.linkedin.com/in/loai-mustafa-597547199/"><i class="fab fa-linkedin"></i></a>
    </div>
    <p>
        <a href="contact.php">Send Message To Me <i class="far fa-arrow-alt-circle-right"></i></a>
    </p>
</div>
<!-- End Contact Us -->

<?php require_once ("includes/footer.php")?>