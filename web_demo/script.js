// This file will contain the JavaScript for the web demo
document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    fetch('https://api-inference.huggingface.co/models/raarongraham/storyteller-bot', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_HF_API_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = data[0].generated_text;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
