import './experience.css';
import { data } from '../../../data/data.js';

export const printExperience = () => {
    const titleEduc = document.getElementById('education');
    titleEduc.style.textDecorationLine = 'none';

    const titleExp = document.getElementById('experience');
    titleExp.style.textDecorationLine = 'underline';

    const article = document.getElementById('changeInfo');
    article.innerHTML = '';

    for(const exp of data.experience) {
        const div = document.createElement('div');
        div.id = 'exp';

        const job = document.createElement('h3');
        job.textContent = exp.job;

        const extra = document.createElement('div');
        extra.id = 'extra';

        const company = document.createElement('p');
        company.textContent = exp.company;

        const year = document.createElement('p');
        year.textContent = exp.year;

        div.appendChild(job);
        extra.appendChild(company);
        extra.appendChild(year);
        div.appendChild(extra);

        article.appendChild(div);
    }
}