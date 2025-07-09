// Simulate login status
var isLoggedIn = false;

// Get button elements
var loginBtn = document.getElementById("login");
var logoutBtn = document.getElementById("logout");
var myAccountsBtn = document.getElementById("myAccounts"); // fixed ID
var transfersBtn = document.getElementById("transfers");
var paymentsBtn = document.getElementById("payments");
var confirmBtn = document.getElementById("confirm");
var cancelBtn = document.getElementById("cancel");

// Login function
function login() {
    isLoggedIn = true;
    alert("Login successful!");
}

// Logout function
function logout() {
    isLoggedIn = false;
    alert("You have been logged out.");
}

// Function to check if user is logged in
function checkLogin(actionName) {
    if (!isLoggedIn) {
        alert("Please login to access " + actionName);
        return false;
    }
    return true;
}

// My Accounts
function showMyAccounts() {
    if (checkLogin("My Accounts")) {
        alert("Showing account details...");
    }
}

// Transfers
function showTransfers() {
    if (checkLogin("Transfers")) {
        alert("Transfer page loaded...");
    }
}

// Payments
function showPayments() {
    if (checkLogin("Payments")) {
        alert("Payment page loaded...");
    }
}

// Confirm Transaction
function confirmTransaction() {
    if (checkLogin("Confirm")) {
        alert("Transaction confirmed!");
    }
}

// Cancel Transaction
function cancelTransaction() {
    if (checkLogin("Cancel")) {
        alert("Transaction cancelled.");
    }
}

// Add event listeners
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
myAccountsBtn.addEventListener("click", showMyAccounts);
transfersBtn.addEventListener("click", showTransfers);
paymentsBtn.addEventListener("click", showPayments);
confirmBtn.addEventListener("click", confirmTransaction);
cancelBtn.addEventListener("click", cancelTransaction);
 