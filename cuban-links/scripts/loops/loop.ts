import { createIframeFile } from "../generateIframe";
import { grantsData } from "./iframes/grants";
import { blogsData } from "./iframes/blogs";


// Assuming the object contains multiple paths
export const loopData = {
  ...grantsData,
  ...blogsData
};

export function loop(data){
    // Loop through each path (key) in the data object
Object.keys(data).forEach(pathKey => {
    const pathArray = data[pathKey]; // Get the array (path1, path2, etc.)

    // Loop through each page in the array
    pathArray.forEach(page => {
        const fileName = page.name;  // Extract the name (fileName)
        const url = page.link;       // Extract the link (URL)

        // Define the filePath dynamically based on the pathKey and fileName
        const filePath = `${pathKey}`;

        // Call the function to create the file
        createIframeFile(filePath, fileName, url);
    });
});
}

loop(loopData)