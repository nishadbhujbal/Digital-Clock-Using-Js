const darkToggle = document.querySelector('.toggle-dark');

darkToggle.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('dark');
    console.log("Hi");
})

setInterval(() => {
    let a1 = new Date();

    let s1 = a1.getSeconds();
    let m1 = a1.getMinutes();
    let h1 = a1.getHours();
    if (h1 >= 12) {
        h1 = h1 % 12;
        document.getElementById('ampm').innerHTML = "PM";
        if (h1 == 0) {
            h1 = 12;
        }
    } else {
        document.getElementById('ampm').innerHTML = "AM";
    }

    s1 = s1 < 10 ? "0" + s1 : s1;
    m1 = m1 < 10 ? "0" + m1 : m1;
    h1 = h1 < 10 ? "0" + h1 : h1;

    document.getElementById('seconds').innerHTML = s1;
    document.getElementById('minutes').innerHTML = m1;
    document.getElementById('hours').innerHTML = h1;

}, 1000);
