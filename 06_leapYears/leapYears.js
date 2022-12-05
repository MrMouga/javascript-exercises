
// C1 : l'année est divisiblea par 4 sans être divisible par 100 (cas des années qui ne sont pas des multiples de 100) ;
// C2 : l'année est divisible par 400 (cas des années multiples de 100).

const leapYears = function(year) {
    if (year%4==0 && year%100>0 || year%400==0){
        return true
    }

    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
