// utilities function
function getValueById(id) {
    const value = document.getElementById(id).value;
    return value
}

document.getElementById("calculate").addEventListener("click", () => {
    let income = parseFloat(getValueById("income"));
    let software = parseFloat(getValueById("software"));
    let courses = parseFloat(getValueById("courses"));
    let internet = parseFloat(getValueById("internet"));


    const totalExpenses = software + courses + internet;
    document.getElementById("total-expenses").innerText = totalExpenses
    const balance = income - totalExpenses;
    document.getElementById("balance").innerText = balance;

    // console.log(new Date().toLocaleDateString());

    document.getElementById("calculate-savings").addEventListener("click", () => {
        const savingsVal = parseFloat(getValueById("savings"));
        const savings = balance * savingsVal / 100;
        document.getElementById("savings-amount").innerText = savings;
    });

    const divEl = document.createElement("div");
    divEl.className = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-indigo-500';
    divEl.innerHTML = `
            <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
            <p class="text-sm font-bold text-gray-700">Income: ${income}</p>
            <p class="text-xs text-gray-600">Expenses: ${totalExpenses}</p>
            <p class="text-xs text-gray-600">Balance: ${balance}</p>
    `;
    const historyList = document.getElementById("history-list")
    
    historyList.append(divEl);

    document.getElementById("results").classList.remove("hidden");

    
});

