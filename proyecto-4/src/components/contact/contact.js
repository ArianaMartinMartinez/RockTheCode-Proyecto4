import { data } from '../../data/data';
import './contact.css';

const main = document.querySelector('main');

export const printContact = () => {
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';

    const h2 = document.createElement('h2');
    h2.textContent = 'Contacto';
    h2.id = 'contactTitle';

    const div = document.createElement('div');
    div.id = 'articlesContactDiv';

    for(const c of data.contact) {
        const article = document.createElement('article');
        article.id = 'contactData';

        article.innerHTML = `
            ${c.icon}
            <p>${c.url}</p>
        `;

        div.appendChild(article);
    }

    contactSection.appendChild(h2);
    contactSection.appendChild(div);

    main.appendChild(contactSection);
}