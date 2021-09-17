fetch('data/spots.json')
    .then(response => {
        if (!response.ok) {
            throw Error('ERROR DAS IST KAPUTT');
        }
        return response.json();
    })
    .then(data => {

        console.log(data)

        document.querySelector('#s1').textContent = data.surfSpots[0].spot + " is a surfspot with with difficulty: " + data.surfSpots[0].difficulty + " and has a rating of: " + data.surfSpots[0].rating;
        document.querySelector('#s2').textContent = data.surfSpots[1].spot + " is a surfspot with with difficulty: " + data.surfSpots[1].difficulty + " and has a rating of: " + data.surfSpots[1].rating;
        document.querySelector('#s3').textContent = data.surfSpots[2].spot + " is a surfspot with with difficulty: " + data.surfSpots[2].difficulty + " and has a rating of: " + data.surfSpots[2].rating;
        document.querySelector('#s4').textContent = data.surfSpots[3].spot + " is a surfspot with with difficulty: " + data.surfSpots[3].difficulty + " and has a rating of: " + data.surfSpots[3].rating;
        document.querySelector('#s5').textContent = data.surfSpots[4].spot + " is a surfspot with with difficulty: " + data.surfSpots[4].difficulty + " and has a rating of: " + data.surfSpots[4].rating;
        document.querySelector('#s6').textContent = data.surfSpots[5].spot + " is a surfspot with with difficulty: " + data.surfSpots[5].difficulty + " and has a rating of: " + data.surfSpots[5].rating;
        document.querySelector('#s7').textContent = data.surfSpots[6].spot + " is a surfspot with with difficulty: " + data.surfSpots[6].difficulty + " and has a rating of: " + data.surfSpots[6].rating;
        document.querySelector('#s8').textContent = data.surfSpots[7].spot + " is a surfspot with with difficulty: " + data.surfSpots[7].difficulty + " and has a rating of: " + data.surfSpots[7].rating;


    })
    .catch(error => {
        console.log(error);
    });


const elRateForm = document.querySelector("#contactform");
const elOutput = document.querySelector("#output");

function rateIt(event) {
    let rateChoice = document.querySelector("#rating").value;

    elOutput.textContent = "You rated: "+ rateChoice;


    event.preventDefault();
}

elRateForm.addEventListener('submit', rateIt, false);