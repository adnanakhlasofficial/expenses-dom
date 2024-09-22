// utilities function
function getValueById(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value
}

function toggleClass(id, removeId, removeHidden, addHidden) {
    document.getElementById(id).classList.add("bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white");
    document.getElementById(removeId).classList.remove("bg-gradient-to-r", "from-blue-500", "to-purple-600", "text-white");
    document.getElementById(removeId).classList.add("text-gray-600");

    document.getElementById(removeHidden).classList.remove("hidden")
    document.getElementById(addHidden).classList.add("hidden")
}

function error(id, error) {
    const inputValue = parseFloat(document.getElementById(id).value)
    if (isNaN(inputValue) || inputValue < 0) {
        return document.getElementById(error).classList.remove("hidden");
    } else {
        return document.getElementById(error).classList.add("hidden");
    }
}

// calculation button activity

document.getElementById("calculate").addEventListener("click", () => {
    let income = getValueById("income");
    let software = getValueById("software");
    let courses = getValueById("courses");
    let internet = getValueById("internet");
    console.log(income, software, courses, internet);
    

    const totalExpenses = software + courses + internet;
    document.getElementById("total-expenses").innerText = totalExpenses
    const balance = income - totalExpenses;
    document.getElementById("balance").innerText = balance;

    // saving button activtiy
    document.getElementById("calculate-savings").addEventListener("click", () => {
        const savingsVal = parseFloat(getValueById("savings"));
        if (savingsVal > 0 && savingsVal < 100) {
            const savings = balance * savingsVal / 100;
            document.getElementById("savings-amount").innerText = savings;
            const remainingBalance = balance - savings
            document.getElementById("remaining-balance").innerText = remainingBalance;
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "⚠️ Total expenses cannot exceed your income!",
              });
        }
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

// history tab click activity
document.getElementById("history-tab").addEventListener("click", (event) => {
    toggleClass("history-tab", "assistant-tab", "history-section", "expense-form");
});

// assistant tab click activity
document.getElementById("assistant-tab").addEventListener("click", (event) => {
    toggleClass("assistant-tab", "history-tab", "expense-form", "history-section");
});

document.getElementById("income").addEventListener("input", (event) => {
    error("income", "income-error");
});
document.getElementById("software").addEventListener("input", (event) => {
    error("software", "software-error");
});
document.getElementById("courses").addEventListener("input", (event) => {
    error("courses", "courses-error");
    
});

document.getElementById("internet").addEventListener("input", () => {
    error("internet", "internet-error");
});

