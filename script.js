//your JS code here. If required.
 const upButton = document.querySelector(".up-button");
        const downButton = document.querySelector(".down-button");
        const leftSlide = document.querySelector(".left-slide");
        const rightSlide = document.querySelector(".right-slide");
        const totalSlides = 4;
        let currentSlide = 0;
        function changeSlide() {
            leftSlide.style.transform =
                `translateY(-${currentSlide * 100}%)`;
            rightSlide.style.transform =
                `translateY(-${currentSlide * 100}%)`;
        }
        // NEXT SLIDE
        downButton.addEventListener("click", function () {
            currentSlide++;
            // If last slide, go to first
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            changeSlide();
        });
        // PREVIOUS SLIDE
        upButton.addEventListener("click", function () {			
		currentSlide--;
            // If first slide, go to last
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            }
            changeSlide();
        });