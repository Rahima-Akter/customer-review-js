document.getElementById('review-btn').addEventListener('click', function(){
    const review = document.getElementById('review-input').value;

    const p = document.createElement('p');
    p.innerText = review;
    p.classList.add('font-semibold')
    p.classList.add('pl-1')
    document.getElementById('review-container').appendChild(p);
})