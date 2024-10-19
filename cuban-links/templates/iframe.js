const fs = require('fs');
const Handlebars = require('handlebars');
const readline = require('readline');

// Function to prompt for user input if variables are not provided
function promptUser(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => rl.question(query, (answer) => {
        rl.close();
        resolve(answer);
    }));
}

// Function to generate an HTML file with an iframe component
async function createIframeFile(filePath, fileName, url) {
    // Handlebars template for iframe
    const iframeTemplate = `
        <html>
        <head>
            <title>Iframe Page</title>
        </head>
        <body>
            <h1>Iframe Embedding</h1>
            <iframe src="{{iframeUrl}}" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>
        </body>
        </html>
    `;

    // Compile the Handlebars template
    const template = Handlebars.compile(iframeTemplate);

    // Create the HTML content with the provided URL
    const content = template({ iframeUrl: url });

    // Combine filepath and filename to create the full path
    const fullPath = `${filePath}/${fileName}.html`;

    // Write the file
    fs.writeFile(fullPath, content, (err) => {
        if (err) {
            return console.error(`Error writing file: ${err}`);
        }
        console.log(`File successfully created at: ${fullPath}`);
    });
}

// Example usage:
async function main() {
    // Check if filePath, fileName, and url are provided, else prompt the user for input
    const filePath = process.argv[2] || await promptUser("Enter the directory path to save the file (default: ./output): ") || './output';
    const fileName = process.argv[3] || await promptUser("Enter the file name (without extension, default: iframePage): ") || 'iframePage';
    const url = process.argv[4] || await promptUser("Enter the URL to embed in the iframe (default: https://blog.pragmaticengineer.com): ") || 'https://blog.pragmaticengineer.com';

    // Ensure the directory exists, if not, create it
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
    }

    // Call the function to create the file
    createIframeFile(filePath, fileName, url);
}

// Start the script
main();