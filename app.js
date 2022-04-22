function guessingGame() {
    let answer = Math.floor(Math.random() * 100);
    let won = false;
    let count = 1
    return function guess(num){

    
    if(won === true) {
        return "The game is over, you already won!"
    }
    
    if(answer > num) {
        count++
        return `${num} is too low`
    }
    if(answer < num) {
        count++
        return `${num} is too high`
    }
    if(num === answer) {
        won = true;
        return `You win! You found ${num} in ${count} guesses`
    }
}
}


function createAccount(pin , amount = 0) {
    return{
        checkBalance(inputPin) {
            if(inputPin !== pin) return 'Invalid Pin';
            return `$${amount}`
        }, 
        deposit(inputPin , depositAmount){
            if(inputPin !== pin) return 'Invalid Pin';
            amount+=depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance : $${amount}`
        },
        withdraw(inputPin , withdrawAmount) {
            if(inputPin !== pin) return 'Invalid Pin';
            if(withdrawAmount > amount) {
                return 'Withdraw amount exceeds current amount. Transaction canceled'
            }
            amount-=withdrawAmount;
            return `Successfully withdrew $${withdrawAmount}. Current balance is $${amount}`;
        },
        changePin(inputPin , newPin) {
            if(inputPin !== pin) return 'Invalid Pin';
            pin = newPin;
            return 'PIN successfully changed'
        }
    }
}


function curriedAdd(total) {
    if(total === undefined) return 0;
    return function addNext(num) {
        if(num === undefined) return total;
        total +=num;
        return addNext;
    }
}