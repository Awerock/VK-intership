

const section = document.createElement('section');
section.classList.add('intership');
document.body.appendChild(section);

const container = document.createElement('div');
container.classList.add('container');
section.appendChild(container);

const form = document.createElement('form');
form.classList.add('intership__form');
container.appendChild(form);

form.appendChild(createLabel('Выберите башню:'));

form.appendChild(createSelect([
    createOption('Башня А:'),
    createOption('Башня Б:')
  ]));

form.appendChild(createLabel('Выберите этаж:'));

const floorOptions = [];
for (let i = 3; i <= 27; i++) {
    floorOptions.push(createOption(`Этаж ${i}`));
}

form.appendChild(createSelect(floorOptions));

form.appendChild(createLabel('Выберите переговорку:'));

const roomOptions = [];
for (let i = 1; i <= 10; i++) {
  roomOptions.push(createOption(`Переговорная ${i}`));
}

form.appendChild(createSelect(roomOptions));

const input = document.createElement('input');
input.setAttribute('type','text');
input.classList.add('intership__input');
input.setAttribute('id','airdatepicker');
input.setAttribute('placeholder', 'Выберете дату');
form.appendChild(input);
new AirDatepicker('#airdatepicker', {
    autoClose: true,
});

const textArea = document.createElement('textarea');
textArea.classList.add('text-in');
textArea.setAttribute('placeholder', 'Комментарий');
textArea.setAttribute('rows', '10');
form.appendChild(textArea);

const buttons = document.createElement('div');
buttons.classList.add('intership__buttons');
form.appendChild(buttons);

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Сохранить';
buttons.appendChild(button);

const buttonRed = document.createElement('button');
buttonRed.classList.add('button');
buttonRed.classList.add('button_red');
buttonRed.textContent = 'Очистить';
buttons.appendChild(buttonRed);


function createLabel(text) {
    const label = document.createElement('label');
    label.classList.add('intership__lable');
    label.textContent = text;
    return label;
  }

function createSelect(options) {
    const select = document.createElement('select');
    select.classList.add('intership__select');
    options.forEach(option => {
        select.appendChild(option);
    });
    return select;
}

function createOption(text) {
    const option = document.createElement('option');
    option.textContent = text;
    return option;
}

button.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = {
        tower: form.elements[0].value,
        floor: form.elements[1].value,
        room: form.elements[2].value,
        date: form.elements[3].value,
        comment: form.elements[4].value,
    };

    console.log(JSON.stringify(formData));
});

buttonRed.addEventListener('click', function(event) {
    event.preventDefault();
    form.reset();
});

/* console.log(form.elements); */