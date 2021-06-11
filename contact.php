<?php include ("includes/header.php")?>

<?php //include("includes/loading.php") ?>

<?php require_once("includes/top_nav.php") ?>
    <div class="wrappar">
        <div class="contact">
            <div class="overlay"></div>
            <div class="container">
                <h2 class="main-header"><span>Contact US</span> </h2>
                <form action="">
                    <div class="left">
                        <input type="text" placeholder="First Name" name="first_name" autocomplete="off">
                        <input type="text" placeholder="Last Name" name="last_name" autocomplete="off">
                        <input type="email" placeholder="Your Email" name="email" autocomplete="off">
                        <input type="text" placeholder="Subject" name="subject" autocomplete="off">
                    </div>
                    <div class="right">
                        <textarea name="message" placeholder="Your Message" autocomplete="off"></textarea>
                        <input type="submit" value="Send">
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php require_once ("includes/footer.php")?>