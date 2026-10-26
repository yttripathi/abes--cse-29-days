const myPromise = new Promise((resolve, reject) => {
    let age = 17;
    if (age >= 18) {
        resolve("Eligible for vote");
    } else {
        reject("Not eligible for vote");
    }
})
const checkVoteEligibility = async() => {
    try {
        const msg = await myPromise;
        console.log(msg);
    } catch (error) {
        console.log(error);
    }
}
checkVoteEligibility();

// myPromise
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err));

// console.log(myPromise);
