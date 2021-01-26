const arrow = document.querySelector('.arrow');
const answer = document.querySelector('.container__answer');
const question = document.querySelector('#container__question');
const fadeElems = document.querySelector('.has-fade');
const p = document.querySelector('.pquestion');

question.addEventListener('click', function() {
    console.log('open dropdown');


    if (question.classList.contains('open')) {
        question.classList.remove('open');
        answer.classList.add('hidden');
        p.classList.remove('bold');
        arrow.classList.remove('rotate');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    }
    else 
    {
        question.classList.add('open');
        answer.classList.remove('hidden');
        p.classList.add('bold');
        arrow.classList.add('rotate');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }

})