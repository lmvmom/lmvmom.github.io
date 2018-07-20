var d=new Date();
document.getElementById('currentdate').innerHTML = d.toDateString();

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}