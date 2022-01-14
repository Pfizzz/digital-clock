const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    // console.log(h, m, s);

    const html = `
        <span>${h}</span> : 
        <span>${m < 10 ? `0${m}` : m}</span> : 
        <span>${s < 10 ? `0${s}` : s}</span>`;

    clock.innerHTML = html;
};
// use setInterval to call function over and over
setInterval(tick, 1000);
