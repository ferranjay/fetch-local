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


/* HOW TO fetch a txt document 

console.log('fetching a poem');
      catchPoem()
        .then(poem => {
          document.getElementById('poem').innerText = poem;
          console.log('the file has been fetched');
        })
        .catch(error => {
          console.log('error!');
          console.error(error);
        });
      async function catchPoem() {
        const response = await fetch('poem.txt');
        return await response.text();
      }      
      
*/


/* HOW TO fetch "multiple" an array of files 

      console.log('fetching multiple files');
      const filenames = [
        'images/daniele-levis-pelusi-311027-unsplash.jpg',
        'images/guy-stevens-746794-unsplash.jpg',
        'images/sharon-pittaway-98257-unsplash.jpg'
      ];
      catchImages(filenames)
        .then(response => {
          console.log('it worked');
        })
        .catch(error => {
          console.log('error!');
          console.error(error);
        });
      async function catchImages(filenames) {
        for (let filename of filenames) {
          const response = await fetch(filename);
          const blob = await response.blob();
          const img = document.createElement('img');
          img.src = URL.createObjectURL(blob);
          img.width = '200';
          document.body.append(img);
        }
      }



*/

