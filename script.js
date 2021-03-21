var dragged;

document.addEventListener('drag', (e) => {
    dragged.parentNode.removeChild(dragged);
}, false);

document.addEventListener('dragstart', (e) => {
    dragged = e.target;
}, false);

document.addEventListener('dragover', (e) => {
    e.preventDefault();
}, false);

document.addEventListener('dragenter', (e) => {
    if (e.target.className === 'dropzone') {
        e.target.style.background = '#364f6b';
        e.target.style.border = 'dashed #e3fdfd';
    }
}, false);

document.addEventListener('dragleave', (e) => {
    if (e.target.className === 'dropzone') {
        e.target.style.background = '';
        e.target.style.border = '';
    }
}, false);

document.addEventListener('drop', (e) => {
    e.preventDefault();

    if (e.target.className === 'dropzone') {
        e.target.style.background = '';
        e.target.style.border = '';
        e.target.appendChild(dragged);
    }
}, false);