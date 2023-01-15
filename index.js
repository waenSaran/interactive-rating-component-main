let ratingSubmit;
const ratingState = document.querySelector('.rating-state');
const thankyouState = document.querySelector('.thankyou-state');

function selectedRating(e){
    let rating = e.innerHTML;
    // Reset the pervious selection
    document.querySelectorAll('.rating').forEach((ele) => {
        ele.style.backgroundColor = ""
        ele.style.color = "";
    })
    e.style.backgroundColor = "hsl(217, 12%, 63%)";
    e.style.color = "white";
    ratingSubmit = rating
}

function submitRating() {
    console.log(ratingSubmit);
    ratingState.classList.add('hide');
    thankyouState.classList.remove('hide');

    document.getElementById('selected-rating').innerHTML = ratingSubmit;
}
