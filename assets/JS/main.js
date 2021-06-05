window.addEventListener("scroll", function(){
            var nav = document.querySelector("nav");
            nav.classList.toggle("sticky",window.scrollY > 0);
        })
        /*
        const body = document.querySelector('body');

        const fade = () => {
            setTimeout(() => {
                body.classList.toggle('fade_out');
            }, 1500);
        }
        body.addEventListener('load', fade());
        */
        //sticky//
        /*
        window.onscroll = function() {stickyFunction()};

        var categories = document.getElementById("cate");
        var stickybar = categories.offsetTop;

        function stickyFunction() {
        if (window.pageYOffset > stickybar) {
            categories.classList.add("stickybar");
        } else {
            categories.classList.remove("stickybar");
        }
        }
        */
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

        const banner = document.querySelector('.banner');
            window.addEventListener('scroll', function(){
                const value = window.scrollY*1.1;
                console.log(value);
                
                banner.style.clipPath = "circle("+ value +"px at center center)";
                
        })
        var tl = new TimelineMax({onUpdate:updatePercentage});
        const controller = new ScrollMagic.Controller();

        tl.from("#text", .3, {x:100, opacity: 0});

        const scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: "onLeave",
            duration: "120%"
        })
            .setPin(this)
            .setTween(tl)
              .addTo(controller);
        function updatePercentage() {
            tl.progress();
            console.log(tl.progress());
        }