import './header.css';
import { linksHeader } from '../../data/linksHeader';

const header = document.querySelector('header');

export const printHeader = () => {
    //Open and close menu
    const imgOpen = document.createElement('img');
    const imgClose = document.createElement('img');

    imgOpen.src = 'https://cdn-icons-png.freepik.com/512/9534/9534625.png';
    imgOpen.alt = 'Abrir menú';
    imgOpen.className = 'imgOpen';

    imgClose.src = 'https://res.cloudinary.com/dj1axfhui/image/upload/v1710496353/marca-de-la-cruz_pzohdu.png';
    imgClose.alt = 'Cerrar menú';
    imgClose.className = 'imgClose';

    const nav = document.createElement('nav');

    imgOpen.addEventListener('click', () => {
        nav.classList.add('active');
        imgClose.style.display = 'flex';
    });

    imgClose.addEventListener('click', () => {
        nav.classList.remove('active');
        imgClose.style.display = 'none';
    });


    //Menu
    const ul = document.createElement('ul');

    for(let link of linksHeader) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = link.href;
        li.textContent = link.name;

        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(imgClose);
    nav.appendChild(ul);
    header.appendChild(imgOpen);
    header.appendChild(nav);
}