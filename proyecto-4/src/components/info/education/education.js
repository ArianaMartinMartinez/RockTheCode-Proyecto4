import './education.css';
import { data } from '../../../data/data.js';

export const printEducation = () => {
    const titleExp = document.getElementById('experience');
    titleExp.style.textDecorationLine = 'none';

    const titleEduc = document.getElementById('education');
    titleEduc.style.textDecorationLine = 'underline';

    const article = document.getElementById('changeInfo');
    article.innerHTML = '';

    for(const educ of data.education) {
        const div = document.createElement('div');
        div.id = 'educ';

        const degree = document.createElement('h3');
        degree.textContent = educ.degree;

        const extra = document.createElement('div');
        extra.id = 'extra';

        const school = document.createElement('p');
        school.textContent = educ.school;

        const year = document.createElement('p');
        year.textContent = educ.year;

        div.appendChild(degree);
        extra.appendChild(school);
        extra.appendChild(year);
        div.appendChild(extra);

        article.appendChild(div);
    }
}