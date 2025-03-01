document.getElementById("clear-btn").addEventListener('click', function(){
    const textOne = document.getElementById("side-text");
    const textTwo = document.getElementById("side-text-2");
    const textThree = document.getElementById("side-text-3");
    const textFour = document.getElementById("side-text-4");
    const textFive = document.getElementById("side-text-5");
    const textSix = document.getElementById("side-text-6");
    textOne.classList.remove('block');
    textOne.classList.add('hidden');
    textTwo.classList.remove('block');
    textTwo.classList.add('hidden');
    textThree.classList.remove('block');
    textThree.classList.add('hidden');
    textFour.classList.remove('block');
    textFour.classList.add('hidden');
    textFive.classList.remove('block');
    textFive.classList.add('hidden');
    textSix.classList.remove('block');
    textSix.classList.add('hidden');
})