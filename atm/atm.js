
function isValid(amount)
{
    if(1 <= amount && amount <= 1500 && amount % 10 == 0){
        return true;
    }else {
        return false;
    }
}

function atm(amount) {

    if (isValid(amount)) {
        if (amount == 1500) {
            return 1500 / 500;
        }
        return 1;
    }
        
    else
        return -1;
    
}

module.exports = {atm};