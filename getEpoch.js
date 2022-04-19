
function getEpoch(D, M, Y, h, m, s) {
    let result = 0;
    if (Y < 1970) console.log("Year must be > 1970");
    else {
        for (i=Y; i > 1970; i--) {
        if (leap_year(i)) result = result + (366 * 86400);
        else result = result + (365 * 86400);
        }
        for (i=1; i<M; i++) {
            D = D + days_in_month(i);
        }
        result = (result + ((D-1) * 86400) + (h * 3600) + (m * 60) + s);
        if ((D == 1) && (leap_year(Y))) result - 86400;
        return result;
    }
}


function leap_year(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function days_in_month(month) {
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) return 31;
    else if (month == 4 || month == 6 || month == 9 || month == 11) return 30;
    else return 28;
}



console.log(getEpoch(01, 01, 1980, 10, 10, 10));
