function inp() {
    const display = prompt("Enter Equation", "")
    const splitDisplay = display.split(/[\+\-\*\/]/);
    if (splitDisplay.length === 2) {

        const n1 = parseFloat(splitDisplay[0]);
        const n2 = parseFloat(splitDisplay[1]);

        console.log(`n1: ${n1}, n2: ${n2}`)
        checkValue(n1, n2);
    } else if(isNaN(myVariable)) {
        alert("NO NUMERICAL VALUE")
    } else {
        console.log('INVALID EQUATION FORMAT')
    }
    function checkValue(n1, n2) {
        if (display.includes("+")) {
            let result = (n1 + n2)
            alert(result)

        } else if (display.includes("-")) {
            let result = (n1 - n2)
            alert(result)

        } else if (display.includes("*")) {
            let result = (n1 * n2)
            alert(result)

        } else if (display.includes("/")) {
            let result = (n1 / n2)
            alert(result)

        } else {
            alert("NO OPERATOR FOUND")
        }

    }
}