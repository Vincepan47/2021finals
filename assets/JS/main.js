window.addEventListener("scroll", function(){
            var nav = document.querySelector("nav");
            nav.classList.toggle("sticky",window.scrollY > 0);
        })
        
        //hoverbtn//
        var hoverbutton = document.getElementById("hoverbtn");

        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            hoverbutton.style.display = "block";
        } else {
            hoverbutton.style.display = "none";
        }
        }

        function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }

        function burgerFunction(x){
            x.classList.toggle("change");
        }
        function showsidenav() {
            document.getElementById("Sidenav").classList.toggle("active");
        }
