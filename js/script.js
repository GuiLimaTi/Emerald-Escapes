
//Select the category filter from the HTML Collection
const categoryFilter= document.getElementById("category");

//Select the price filter from the HTML collection
const priceFilter = document.getElementById("price");

//Select all experience cards from the HTML
const experienceCards = document.querySelectorAll(".experience-card");

//Select the element that displays the number of matching EXPERIENCES
const resultsCount = document.getElementById("results-count");

// FILTER EXPERIENCES // 



function filterExperiences() {

    // Get the selected category and price
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    // Check every experience card
    experienceCards.forEach(function(card) {

        // Get the category and price of this card
        const cardCategory = card.dataset.category;
        const cardPrice = Number(card.dataset.price);

        // Check if the category matches
        const categoryMatches =
            selectedCategory === "all" ||
			cardCategory === selectedCategory;

        // Check if the price matches
        let priceMatches = false;

        if (selectedPrice === "all") {
            priceMatches = true;
        } else if (selectedPrice === "low") {
            priceMatches = cardPrice < 100;
        } else if (selectedPrice === "medium") {
            priceMatches = cardPrice >= 100 && cardPrice <= 200;
        } else if (selectedPrice === "high") {
            priceMatches = cardPrice > 200;
        }

        // Show or hide the Bootstrap column containing the card
		const cardColumn = card.parentElement;

		if (categoryMatches && priceMatches) {
		cardColumn.style.display = "";
		} else {
		cardColumn.style.display = "none";
		}

    });
	
	//Count the experiences that are currently visible
	const visibleCount = Array.from(experienceCards).filter(function(card) {
		return card.parentElement.style.display !== "none";
	}).length;
	
	//Update the results count
	if (resultsCount) {
		resultsCount.textContent = visibleCount +
			(visibleCount === 1 ? " experience found" : " experiences found");
	}

}

// Run the filters onlyif they exist on the current page//
if (categoryFilter && priceFilter) {
	categoryFilter.addEventListener ("change", filterExperiences);
	priceFilter.addEventListener("change", filterExperiences);
}
	
// Contact Form

//Select the contact form from the HTML

const contactForm= document.getElementById("contact-form");

//Select the form fields

const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const phoneInput= document.getElementById("phone");
const queryTypeInput= document.getElementById("query-type");
const messageInput= document.getElementById("message");

//Select the feedback Area
const formFeedback = document.getElementById("form-feedback");

//Run the validation only if the contact form exists
if (contactForm) {
	
	//Detect when the user submits the Form
	contactForm.addEventListener("submit", function(event) {
		
		//Preven the form from submitting automatically
		event.preventDefault();
		
		//Get the name entered by the user
		const name= nameInput.value.trim();
		
		//Check if the name is empty
		if (name=== "") {
			formFeedback.textContent = "Please enter your full name.";
			formFeedback.className = "error";
			nameInput.focus(); //move the cursor to the name space
			return;
		}
		
		//Get the email entered by the user
		const email= emailInput.value.trim();
		
		//Check if the email is empty
		if (email=== "") {
			formFeedback.textContent = "Please enter your email.";
			formFeedback.className = "error";
			emailInput.focus(); //move the cursor to the name space
			return;
		}
		
		//Check if the email format is valid
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			formFeedback.textContent = "Please enter a valid email address.";
			formFeedback.className = "error";
			emailInput.focus(); //move the cursor to the name space
			return;
		}	
		
		//Get the Phone Number entered by the user
		const phone= phoneInput.value.trim();
		
		//Check if the Phone Number is empty
		if (phone=== "") {
			formFeedback.textContent = "Please enter your Phone Number.";
			formFeedback.className = "error";
			phoneInput.focus(); //move the cursor to the name space
			return;
		}
		
		//Check if the phone number contains a valid format
		const phonePattern = /^\+?[0-9\s()-]{7,20}$/;
		
		if (!phonePattern.test(phone)) {
		formFeedback.textContent = "Please enter a valid Phone number.";
		formFeedback.className = "error";
		phoneInput.focus();
		return;
		}
						
		//Get the select query type
		const queryType= queryTypeInput.value.trim();
		
		//Check if the query Type is empty
		if (queryType=== "") {
			formFeedback.textContent = "Please select a type of enquiry.";
			formFeedback.className = "error";
			queryTypeInput.focus(); //move the cursor to the name space
			return;
		}
		
		//Get the message entered by the user
		const message= messageInput.value.trim();
		
		//Check if the message is too short 
		if (message.length < 10) {
			formFeedback.textContent = "Your message must contain at least 10 characters.";
			formFeedback.className = "error";
			messageInput.focus(); //move the cursor to the name space
			return;
		}
		
		
		//Get teh customer information from the Form
		
		const customerName= nameInput.value.trim();
		const customerEmail= emailInput.value.trim();
		const customerPhone= phoneInput.value.trim();
		const enquiryType= queryTypeInput.value.trim();
		const customerMessage= messageInput.value.trim();
		
		//Create the content of the text fileCreatedDate
		const enquiryContent = 
			"EMERALD ESCAPES - CUSTOMER ENQUIRY\n"+
			"===================================\n\n"+
			"Name: " + customerName + "\n"+
			"Email: " + customerEmail + "\n"+
			"Phone: " + customerPhone + "\n"+
			"Enquiry Type: " + enquiryType + "\n\n"+
			"Message:\n" + customerMessage + "\n\n" + 
			"=================================\n";
			
		// Create a downloadable text file
		const textFile = new Blob([enquiryContent], {
			type: "text/plain;charset=utf-8"
		});

		// Create a temporary download link
		const downloadLink = document.createElement("a");
		downloadLink.href = URL.createObjectURL(textFile);

		// Create a safe filename using the customer's name
		const safeName = customerName
			.replace(/[^a-z0-9 ]/gi, "")
			.trim()
			.replace(/\s+/g, "-");

		downloadLink.download = "Emerald-Escapes-Enquiry-" + safeName + ".txt";

		// Start the download
		document.body.appendChild(downloadLink);
		downloadLink.click();
		downloadLink.remove();

		// Release the temporary file URL
		URL.revokeObjectURL(downloadLink.href);

		// Display a success message
		formFeedback.textContent = "Thank you! Your enquiry has been prepared for download.";
		formFeedback.className = "success";

		// Clear the form after successful validation
		contactForm.reset();
		
	})
	
}


// HOLIDAY BUDGET CALCULATOR

// Select the calculator elements
const travellersInput = document.getElementById("travellers");
const daysInput = document.getElementById("days");
const travelStyleInput = document.getElementById("travel-style");
const calculateButton = document.getElementById("calculate-budget");
const budgetResult = document.getElementById("budget-result");

// Run the calculator only if it exists on the current page
if (calculateButton) {

    calculateButton.addEventListener("click", function() {

        // Get the values entered by the user
        const travellers = Number(travellersInput.value);
        const days = Number(daysInput.value);
        const dailyBudget = Number(travelStyleInput.value);

        // Check if the values are valid
        if (travellers < 1 || travellers > 20 ||
            days < 1 || days > 30 ||
            !travellersInput.value ||
            !daysInput.value) {

            budgetResult.textContent =
                "Please enter valid numbers of travellers and days.";
            return;
        }

        // Calculate the estimated total budget
        const totalBudget = travellers * days * dailyBudget;

        // Display the estimated budget
        budgetResult.textContent =
            "Your estimated budget is €" +
            totalBudget.toLocaleString("en-IE") +
            ". Enjoy your Irish escape!";

    });

}




