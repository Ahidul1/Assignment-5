// first card
donationHandle('noakhali-donate-btn', 'noakhali-donate-amount', 'noakhali-amount', 'total-amount', 'history-section', 'noakhali-heading');



// second card
donationHandle('feni-donate-btn', 'feni-donate-amount', 'feni-amount', 'total-amount', 'history-section', 'feni-heading');




// third card
donationHandle('protest-donate-btn', 'protest-donate-amount', 'protest-amount', 'total-amount', 'history-section', 'quota-heading');

document.getElementById('blog-btn')
    .addEventListener('click', function () {
        window.location.href = "blog.html";
    });




// Toggle - button
const donationButton = document.getElementById('donation-btn');
const historyButton = document.getElementById('history-btn');

historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-primary-color');
    historyButton.classList.remove('bg-white');
    donationButton.classList.remove('bg-primary-color');
    donationButton.classList.add('bg-white');
    
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('footer-div').classList.add('hidden');
})

donationButton.addEventListener('click', function () {
    donationButton.classList.add('bg-primary-color');
    donationButton.classList.remove('bg-white');
    historyButton.classList.remove('bg-primary-color');
    historyButton.classList.add('bg-white');
    
    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('footer-div').classList.remove('hidden');
})





// Utilities
function getInputAsNumber(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueAsNumber = Number(inputValue);
    return inputValueAsNumber;
}

function getTextAsNumber(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueAsNumber = Number(textValue);
    return textValueAsNumber;
}

function donationHandle(buttonId, donationInputNumberId, totalDonationId, totalAmountId, historySection, titleId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        let donateAmount = getInputAsNumber(donationInputNumberId);
        let currentDonationAmount = getTextAsNumber(totalDonationId);
        let totalAmount = getTextAsNumber(totalAmountId);

        if (isNaN(donateAmount) || donateAmount <= 0) {
            document.getElementById(donationInputNumberId).value = '';
            alert('Invalid Donation Amount');
            return;
        }

        if (donateAmount > totalAmount) {
            document.getElementById(donationInputNumberId).value = '';
            alert("You don't have sufficient balance");
            return;
        }

        currentDonationAmount += donateAmount;
        document.getElementById(totalDonationId).innerText = currentDonationAmount.toFixed(2);
        document.getElementById(donationInputNumberId).value = '';

        totalAmount -= donateAmount;
        document.getElementById(totalAmountId).innerText = totalAmount.toFixed(2);

        let title = document.getElementById(titleId).textContent;

        let history = document.getElementById(historySection);
        let newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="flex flex-col p-5 bg-white border border-border-color rounded-2xl">
                <h3 class="text-lg font-bold">
                    ${donateAmount.toFixed(2)} Taka is ${title}
                </h3>
                <p id="history-date" class="text-sm md:text-base text-paragraph-color">
                </p>
            </div>
            `

        history.insertBefore(newHistory, history.firstChild);

        const date = new Date();
        newHistory.querySelector("#history-date").innerText = "Date: " + date.toString();

        const displayModal = document.getElementById('my_modal_1');
        displayModal.showModal();
    });
};


const siteHeader = document.getElementById('header');

function scrollHeaderStyle() {
    if (window.scrollY > 50) {
        siteHeader.classList.add('backdrop-blur-lg', 'bg-white/30')
    } else {
        siteHeader.classList.remove('backdrop-blur-lg', 'bg-white/30')
    };
}

window.addEventListener('scroll', scrollHeaderStyle);