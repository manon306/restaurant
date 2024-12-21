    const creditCardOption = document.getElementById("credit-card");
    const deliveryOption = document.getElementById("delivery");
    const cardInfoSection = document.getElementById("card-info-section");
    const cardForm = document.getElementById("credit-card-form");
    const errorMessage = document.getElementById("error-message");
    const time = document.getElementById("time");


    // Show card info section when "Credit Card" is selected
    creditCardOption.addEventListener("change", () => {
        if (creditCardOption.checked) {
            cardInfoSection.style.display = "block";
            time.style.display = "none";
        }
    });

    // Hide card info section when "Cash on Delivery" is selected
    deliveryOption.addEventListener("change", () => {
        if (deliveryOption.checked) {
            time.style.display = "block";
            cardInfoSection.style.display = "none";
        }
    });

    cardForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const cardNumber = document.getElementById("card-number").value.trim();
        const expiryDate = document.getElementById("expiry-date").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const nameOnCard = document.getElementById("name-on-card").value.trim();

        let errorMessages = [];
        

        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            errorMessages.push("Card number must be exactly 16 digits.");
        }

        const [month, year] = expiryDate.split("/");
        if (
            !expiryDate.includes("/") ||
            month < 1 || month > 12 ||
            year.length !== 2 || isNaN(month) || isNaN(year)
        ) {
            errorMessages.push("Expiry date must be in MM/YY format.");
        }

        if (cvv.length !== 3 || isNaN(cvv)) {
            errorMessages.push("CVV must be exactly 3 digits.");
        }

        if (nameOnCard.length === 0) {
            errorMessages.push("Name on card cannot be empty.");
        }

        if (errorMessages.length > 0) {
            errorMessage.style.display = "block";
            errorMessage.innerText = errorMessages.join("\n");
        } else {
            errorMessage.style.display = "none";
            alert("Payment successful!");
            cardForm.reset(); // Reset the form
        }
    });

