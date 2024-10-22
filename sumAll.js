const sumAll = function(first, last) {
    let sum = 0
    if (first < 0) {
        return "ERROR"
    }

    if (!Number.isInteger(first)) {
        return "ERROR"
    }

    if (!Number.isInteger(last)) {
        return "ERROR"
    }
 
    if (first < last) {
        for (i = first; i <= last; i++) {
            sum += i;
        }
    }

    else  {
        for (i = first; i >= last; i--) {
            sum += i;
        }
    }

    return sum;
};

// Event listener for form submission
document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get input values
    const first = parseInt(document.getElementById("firstNumber").value);
    const last = parseInt(document.getElementById("lastNumber").value);

    // Calculate sum and display result
    const result = sumAll(first, last);
    document.getElementById("result").textContent = result;
});