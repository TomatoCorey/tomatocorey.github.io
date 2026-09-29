fetch('kana.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Now you have the JSON data to work with
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

console.log("test");
wait(1000);