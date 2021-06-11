        <div class="footer">Created By Loai Mustafa ©</div>

            <script src="js/jquery-3.5.1.min.js"></script>
            <script>
            $(window).on("load",function(){
                    "use strict";
                    if($('.loading-overlay').length > 0){
                            $('.loading-overlay').delay(1000).fadeOut(1000,function(){
                                    $(this).remove();
                            });
                    }     
            });
        </script>
        <?php if(isset($indexstyle) && $indexstyle == true): ?>
            <script src="js/typed.js"></script>
            <script src="js/master.js"></script>
            <script src="js/vide.js"></script>
        <?php endif; ?>
        <script src="js/top_nav.js"></script>
    </body>
</html>