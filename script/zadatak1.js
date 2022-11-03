let dugme = document.querySelector('#dugme');
let vreme = document.querySelector('#vreme');
let datum = document.querySelector('#poruka');
let sat, minut, poruka;

dugme.addEventListener('click', () => {
    vreme.innerHTML = 'Vreme je: ' + VremeIspis();
    datum.innerHTML = PorukaIspis();
});

const DatumIspis = () => {
    let d = new Date();
    return d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();
}

const VremeIspis = () => {
    let d = new Date();
    sat = d.getHours();
    minut = d.getMinutes();
    return sat + ":" + minut;
}

const PorukaIspis = () => {
    if (sat >= 4 && sat <= 10) return 'Dobro jutro';
    else if (sat >= 10 && sat <= 18) return 'Dobar dan';
    else if (sat >= 18 && sat <= 23) return 'Dobro vece';
    else return 'Laku noc';
}