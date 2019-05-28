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

catchBanner();

async function catchBanner(){
    const response = await fetch('images/banner.jpg');
    const blob = await response.blob();
    document.getElementById('banner').src = URL.createObjectURL(blob);
}

catchPalmtree();

async function catchPalmtree(){
    const response = await fetch('images/palmtree.jpg');
    const blob = await response.blob();
    document.getElementById('palmtree').src = URL.createObjectURL(blob);

}
