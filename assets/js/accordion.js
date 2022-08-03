const accordion = document.getElementsByClassName('block-content');
const content = document.getElementsByClassName('content');
const arrow = document.getElementsByClassName('arrow');

console.log(accordion);


for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active')
        this.lastElementChild.classList.toggle('h-0')
        this.lastElementChild.classList.toggle('h-28')
    })
}
