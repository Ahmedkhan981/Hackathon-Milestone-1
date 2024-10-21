document
	.getElementById("resumeForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		document.getElementById("displayName").textContent =
			document.getElementById("name").value;
		document.getElementById("displayEmail").textContent =
			document.getElementById("email").value;
		document.getElementById("displayExperience").textContent =
			document.getElementById("experience").value;
		document.getElementById("displayContact").textContent =
			document.getElementById("contact").value;
		document.getElementById("displayEducation").textContent =
			document.getElementById("education").value;
		document.getElementById("displaySkill").textContent =
			document.getElementById("skill").value;

		const imageUpload = document.getElementById("imageUpload");
		const imagePreview = document.getElementById("imagePreview");
		const errorMessage = document.getElementById("errorMessage");

		if (imageUpload.files && imageUpload.files[0]) {
			const reader = new FileReader();
			reader.onload = function (e) {
				imagePreview.src = e.target.result;
				imagePreview.style.display = "flex";
			};
			reader.readAsDataURL(imageUpload.files[0]);
			errorMessage.textContent = ""; // Clear any previous error message
		} else {
			imagePreview.style.display = "none";
			errorMessage.textContent = "Please upload a valid image.";
		}

		// Show the resume container
		document.getElementById("cvContainer").style.display = "block";
	});

// Share button functionality
document.getElementById("shareButton").addEventListener("click", function () {
	const resumeContent = document.getElementById("cvContainer").innerHTML;
	const blob = new Blob([resumeContent], { type: "text/html" });
	const url = URL.createObjectURL(blob);

	// Create a temporary link element
	const link = document.createElement("a");
	link.href = url;
	link.download = "resume.html"; // Download file name
	document.body.appendChild(link);
	link.click(); // Trigger the download
	document.body.removeChild(link); // Clean up
});




document
	.getElementById("downloadButton")
	.addEventListener("click", function () {
		const name = document.getElementById("name").value;
		const resumeData = {
			name,
			email: document.getElementById("email").value,
			experience: document.getElementById("experience").value,
			contact: document.getElementById("contact").value,
			education: document.getElementById("education").value,
			skill: document.getElementById("skill").value,
		};

		const blob = new Blob([JSON.stringify(resumeData, null, 2)], {
			type: "application/json",
		});
		const url = URL.createObjectURL(blob);

		// Create a temporary link element
		const link = document.createElement("a");
		link.href = url;
		link.download = "resume.json"; // Download file name
		document.body.appendChild(link);
		link.click(); // Trigger the download
		document.body.removeChild(link); // Clean up
	});
