/*  THE OLD WAY OF WITH .then   

    console.log('client-side only')
    fetch('images/banner.jpg')
        .then(response => {
            console.log(response);
            return response.blob();
    })
    .then(blob => {
        console.log(blob);
        document.getElementById('banner').src = URL.createObjectURL(blob);
    });

    console.log('image nr 2')
    fetch('images/palmtree.jpg')
        .then(response => {
            console.log(response);
            return response.blob();
    })
    .then(blob => {
        console.log(blob);
        document.getElementById('palmtree').src = URL.createObjectURL(blob);
    });
    .catch(error => {
        console.error(error);
    })
*/

/* THE NEW WAY OF WRITING WITH async */

console.log('client-side only');

catchBanner()
    .then(response => {                             /* log message if it worked and if not we get an error */
        console.log('it works');
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    })
    ;


async function catchBanner(){                               /* async function that makes the fetch request */
    const response = await fetch('images/banner.jpg');      /* it turns the body of what comes back in the HTTP repsonse into a blob */
    const blob = await response.blob();         
    document.getElementById('banner').src = URL.createObjectURL(blob);  /* it converts the blob into the format that the DOM element expects */
}

catchPalmtree();

async function catchPalmtree(){
    const response = await fetch('images/palmtree.jpg');
    const blob = await response.blob();
    document.getElementById('palmtree').src = URL.createObjectURL(blob);

}
