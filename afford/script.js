document.getElementById('calculateButton').addEventListener('click', async () => {
    const numberType = document.getElementById('numberType').value;
    const apiUrl = `http://localhost:3000/numbers/${numberType}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
});

function displayResult(data) {
    document.getElementById('prevState').textContent = data.windowPrevState.join(', ');
    document.getElementById('currState').textContent = data.windowCurrState.join(', ');
    document.getElementById('fetchedNumbers').textContent = data.numbers.join(', ');
    document.getElementById('average').textContent = data.avg;
}
