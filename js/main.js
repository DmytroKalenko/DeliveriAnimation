const delivery = document.querySelector('.delivery');
delivery.animate([
    // keyframes
    { transform: `translateX(10%)` },
    { transform: `translateX(20%)` },
    {
        transform: `translateX(30%)`,
        top: `37%`
    },
    { transform: `translateX(40%)` },
    {
        transform: `translateX(50%)`,
        top: `37%`
    },

    { transform: `translateX(60%)` },
    { transform: `translateX(70%)` },
    { transform: `translateX(80%)` },
    { transform: `translateX(90%)` },
    { transform: `translateX(100%)` },
    { transform: `translateX(130%)` }


], {
    // timing options
    duration: 7000,
    iterations: Infinity
})


const smoke = document.querySelector('.smoke');
smoke.animate([
    // keyframes
    { left: `-25px` },
    {
        left: `-34px`,
        opacity: '1'
    },
], {
    // timing options
    duration: 500,
    iterations: Infinity
})