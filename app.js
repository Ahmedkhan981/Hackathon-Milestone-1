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
			errorMessage.textContent = ""; 
		} else {
			imagePreview.style.display = "none";
			errorMessage.textContent = "Please upload a valid image.";
		}

		document.querySelector(".img-div").style.display = "flex";
		document.querySelector(".img-div").style.gap= "1rem";
		document.getElementById("cvContainer").style.display = "block";
	});


document.getElementById("shareButton").addEventListener("click", function () {
	const resumeContent = document.getElementById("cvContainer").innerHTML;
	const blob = new Blob([resumeContent], { type: "text/html" });
	const url = URL.createObjectURL(blob);


	const link = document.createElement("a");
	link.href = url;
	link.download = "resume.html"; 
	document.body.appendChild(link);
	link.click(); 
	document.body.removeChild(link); 
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

		const link = document.createElement("a");
		link.href = url;
		link.download = "resume.json"; 
		document.body.appendChild(link);
		link.click(); 
		document.body.removeChild(link); 
	});
