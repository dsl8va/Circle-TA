/* 
Create a function that sets a cookie with an initial value of 0 on the page. Each time on
the page loads, add 1 to the cookie’s value and log it to the console. For example, the
value of the cookie would be 1 on the first page load, 2 on the second load, etc. Extra
Credit: On the page, create a button that resets the cookie’s value to 0 when clicked.
*/

function isNumeric(input) {
    return /^\d+$/.test(input);
}

function setCookie() {
    let cookie = document.cookie;
    console.log(`Cookie count is currently ${cookie}`);

    // Check if the cookie is an integer, not necessarily required, but a security check 
    // to ensure cookie stays an integer with no injections
    if (isNumeric(cookie)) {
        let newNum = parseInt(cookie) + 1;
        document.cookie = newNum.toString();
    } else {
        document.cookie = '0';
    }
    return;
}

function reset() {
    document.cookie = '0';
    console.log(`Cookie reset to ${document.cookie}`);
}

setCookie();