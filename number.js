var userNumber;
userNumber = window.prompt("Please enter a number", 0);
nextPrime:
for (let i = 2; i <= userNumber; i++ ){
    for (let j = 2; j<i; j++){
        if(i%j == 0) continue nextPrime;
    }
    alert(`${i} is a prime number.`);
}

