document.getElementById("resumeForm").addEventListener("submit", function (e) {
	e.preventDefault();

	// Get form values
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const experience = document.getElementById("experience").value;
	const contact = document.getElementById("contact").value;
	const education = document.getElementById("education").value;
	const skill = document.getElementById("skill").value;
	const imageFile = document.getElementById("imageUpload").files[0];
	const errorMessage = document.getElementById("errorMessage");

	// Image validation and preview
	if (imageFile) {
		const reader = new FileReader();
		reader.onload = function (event) {
			const img = new Image();
			img.onload = function () {
				if (
					img.width >= 600 &&
					img.width <= 800 &&
					img.height >= 700 &&
					img.height <= 900
				) {
					document.getElementById("imagePreview").src =
						event.target.result;
					document.getElementById("imagePreview").style.display =
						"block";
					errorMessage.textContent = ""; // Clear error message
				} else {
					errorMessage.textContent = "Image must be 600x900 pixels.";
					document.getElementById("imagePreview").style.display =
						"none";
				}
			};
			img.src = event.target.result;
		};
		reader.readAsDataURL(imageFile);
	}

	// Display CV
	document.getElementById("cvContainer").style.display = "flex";
	document.getElementById("displayName").textContent = name;
	document.getElementById("displayEmail").textContent = email;
	document.getElementById("displayExperience").textContent = experience;
	document.getElementById("displayContact").textContent = contact;
	document.getElementById("displayEducation").textContent = education;
	document.getElementById("displaySkill").textContent = skill;

	const editableFields = [
		"displayName",
		"displayEmail",
		"displayExperience",
		"displayContact",
		"displayEducation",
		"displaySkill",
	];

	editableFields.forEach((fieldId) => {
		const field = document.getElementById(fieldId);
		field.addEventListener("click", function () {
			field.setAttribute("contentEditable", "true");
			field.focus();
		});

		field.addEventListener("blur", function () {
			field.setAttribute("contentEditable", "false");
		});
	});
});
