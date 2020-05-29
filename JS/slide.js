const carousels = document.querySelectorAll(".carousels");

Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel, {
        type: "carousel",
        perView: 4,
        gap: 200,

        breakpoints: {
            
            768: {
                perView:2
            },
            568: {
                perView: 1
            },
            320: {
                perView: 1
            }
        }

    });


    slider.mount();

});