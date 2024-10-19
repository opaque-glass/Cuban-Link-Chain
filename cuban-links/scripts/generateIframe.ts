import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { iframeTemplate } from '../templates/iframe-template';

// Function to generate an HTML file with an iframe component
export function createIframeFile(filePath, fileName, url, ext = "md") {
    // Ensure the provided filePath is an absolute path
    const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath);

    // Ensure the directory exists, if not, create it
    if (!fs.existsSync(absolutePath)) {
        fs.mkdirSync(absolutePath, { recursive: true });
    }

  
    // Compile the Handlebars template
    const template = Handlebars.compile(iframeTemplate);

    // Create the HTML content with the provided URL
    const content = template({ iframeUrl: url });

    // Combine the absolute path and filename to create the full path
    const fullPath = path.join(absolutePath, `${fileName}.${ext}`);

    // Write the file
    fs.writeFile(fullPath, content, (err) => {
        if (err) {
            return console.error(`Error writing file: ${err}`);
        }
        console.log(`File successfully created at: ${fullPath}`);
    });
}
