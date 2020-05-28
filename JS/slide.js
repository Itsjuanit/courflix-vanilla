const carousels = document.querySelectorAll(".carousels");

Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel, {
        type: "carousel",
        perView: 4,
        gap: 200,

        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }

    });


    slider.mount();

});