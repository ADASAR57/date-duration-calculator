function calculateDuration() {
    // Get the dates from the inputs
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const resultDiv = document.getElementById('result');

    // Check if both dates were entered
    if (!startDateInput.value || !endDateInput.value) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter both start and end dates</p>';
        return;
    }

    // Convert the input dates to Date objects
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    // Check if dates are valid
    if (startDate > endDate) {
        resultDiv.innerHTML = '<p style="color: red;">Start date cannot be after end date</p>';
        return;
    }

    // Calculate the duration
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate total days for additional precision
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

    // Display the result
    resultDiv.innerHTML = `
        <p>Duration between dates:</p>
        <p><strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days</p>
        <p>Total days: <strong>${totalDays}</strong></p>
    `;
} 