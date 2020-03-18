function palindrome(array) {
    var counter = 0;
    array.forEach(element => {
        var check;
        var length = element.length
        for (var i = 0; i < length / 2; i++) {
            if (element[i] === element[(length - 1) - i]) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (check === true) {
            counter++;
        }
    });

    console.log("The number of palindromes is " + counter)
}