// Smooth scrolling buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Prediction history
function savePrediction(iq, cgpa, result, confidence) {

    let history = JSON.parse(localStorage.getItem("predictionHistory")) || [];

    history.unshift({
        iq,
        cgpa,
        result,
        confidence,
        time: new Date().toLocaleTimeString()
    });

    document.getElementById("empty-row").style.display = "none";
    localStorage.setItem("predictionHistory", JSON.stringify(history));

    renderHistory();
}

function renderHistory() {

    const history = JSON.parse(localStorage.getItem("predictionHistory")) || [];

    const body = document.getElementById("history-body");

    if (!body) return;

    body.innerHTML = "";

    if (history.length === 0) {
        body.innerHTML = `
        <tr class="empty-row">
            <td colspan="6">
                No predictions yet
            </td>
        </tr>
        `;
        return;
    }

    history.forEach((item, index) => {

        body.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.iq}</td>
            <td>${item.cgpa}</td>
            <td>${item.result}</td>
            <td>${item.confidence}%</td>
            <td>${item.time}</td>
        </tr>
        `;
    });
}

function clearHistory() {
    localStorage.removeItem("predictionHistory");
    renderHistory();
    document.getElementById("empty-row").style.display = "table-row";
}

// Auto-render history on load
window.onload = function () {
    renderHistory();

    // Save latest prediction if available
    const prediction = document.getElementById("prediction-result");
    
    if (prediction) {

        const iq = prediction.dataset.iq;
        const cgpa = prediction.dataset.cgpa;
        const result = prediction.dataset.result;
        const confidence = prediction.dataset.confidence;

        savePrediction(iq, cgpa, result, confidence);
    }
};