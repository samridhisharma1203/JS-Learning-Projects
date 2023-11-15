// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Create a new variable named message
    let message = "%c" + txt;

    // Create a style variable
    let style = `color: ${color};`;

    // Update the style variable with background
    style += `background: ${background};`;

    // Update the style variable with font-size
    style += `font-size: ${fontSize};`;

    // Console log the message and style variables
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Set up the fontStyle variable
    let fontStyle = "color: #FFD700; background: #000; font-size: 24px;";

    // Check the reason and display a message accordingly
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log("No special celebration");
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Invoke the new function with arguments
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
