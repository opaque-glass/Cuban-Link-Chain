import fs from 'fs';
import Handlebars from 'handlebars';

// Function to generate an HTML file with an iframe component
function createIframeFile(filePath, fileName, url) {
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
const filePath = './output';  // Directory where the file will be saved
const fileName = 'iframePage'; // Desired file name without the extension
const url = 'https://blog.pragmaticengineer.com'; // URL to embed in the iframe

// Ensure the directory exists, if not, create it
if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
}

// Call the function to create the file
createIframeFile(filePath, fileName, url);