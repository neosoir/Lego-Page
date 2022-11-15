const   modal       =   document.querySelector('.modal'),
        closeModal  =   document.querySelector('.modal__content--close'),
        buttons     =   document.querySelectorAll('.footer__content--button');


        console.log(buttons)

buttons.forEach( button => {
    
    button.addEventListener('click', () => {
    
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    
    } );

} );


closeModal.addEventListener('click', () => {

    console.log('click')
    modal.classList.remove('visible');
    modal.classList.add('hidden');

} );