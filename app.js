new AirDatepicker('#airdatepicker');

const section = document.createElement('section');
section.classList.add("intership");
document.body.appendChild(section);

const container = document.createElement('div');
container.classList.add("container");
section.appendChild(container);

const form = document.createElement('form');
form.classList.add("intership__form");
container.appendChild(form);

const label = document.createElement('label');
label.classList.add("intership__lable");
label.textContent = "Выберите башню:";
form.appendChild(label);

const select = document.createElement('select');
select.classList.add("intership__select");
form.appendChild(select);

const options = ['Башня А', 'Башня Б'];
for (let i = 0; i < options.length; i++) {
    const option = document.createElement('option');
    option.textContent = options[i];
    select.appendChild(option);
  }
