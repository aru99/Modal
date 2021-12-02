'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function to Open modal

const openModal = function () {
  //while selecting the class here, we do not use the dot '.'
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//close modal function, to follow DRY
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// we didn't write closeModal(), because that would cause Javascript to execute the function, wwe wrote closeModal so that it is executed as soon as the click function occurs, thus we declared closeModal, we didn't call it openModal()
modal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//keyboard events
document.addEventListener('keydown', function (e) {
  console.log(e);
  //   if (e.key === 'Escape') {
  //     closeModal();
  //   }

  //if the modal does not contain the hidden classs

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
