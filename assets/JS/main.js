window.addEventListener("scroll", function(){
            var nav = document.querySelector("nav");
            nav.classList.toggle("sticky",window.scrollY > 0);
        })

        function burgerFunction(x){
            x.classList.toggle("change");
        }
        function showsidenav() {
            document.getElementById("Sidenav").classList.toggle("active");
        }
