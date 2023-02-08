// SIDEBAR

const menuItems = document.querySelectorAll(".menu-item");

//MESSAGE
const messageNotification = document.querySelector("#message-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll("choose-size span");

const root = document.querySelector(":root");

const colorPallete = document.querySelectorAll(".choose-color span");

// SIDEBAR
const changeActiveItem = () => {
	menuItems.forEach((item) => {
		item.classList.remove("active");
	});
};

menuItems.forEach((item) => {
	item.addEventListener("click", () => {
		changeActiveItem();
		item.classList.add("active");
		if (item.id != "notification") {
			document.querySelector(".notifications-popup").style.display = "none";
		} else {
			document.querySelector(".notifications-popup").style.display = "block";
			document.querySelector(
				"#notification .notification-count"
			).style.display = "none";
		}
	});
});

// highlight for message card when message items is clicked
messageNotification.addEventListener("click", () => {
	messages.style.boxShadow = "0 0 1rem var(--color-primary)";
	messageNotification.querySelector(".notification-count").style.display =
		"none";
	setTimeout(() => {
		messages.style.boxShadow = "none";
	}, 2000);
});

// THEME

// OPEN MODAL
const openThemeModal = () => {
	themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
	if (e.target.classList.contains("customize-theme")) {
		themeModal.style.display = "none";
	}
};
// CLOSE MODAL
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openThemeModal);

// CHANGE COLOR
colorPallete.forEach((color) => {
	color.addEventListener("click", () => {
		let primary;

		if (color.classList.contains("color-1")) {
			primaryHue = 252;
		} else if (color.classList.contains("color-2")) {
			primaryHue = 52;
		} else if (color.classList.contains("color-3")) {
			primaryHue = 352;
		} else if (color.classList.contains("color-4")) {
			primaryHue = 152;
		} else if (color.classList.contains("color-5")) {
			primaryHue = 202;
		}
		color.classList.add("active");

		root.style.setProperty("--primary-color-hue", primaryHue);
	});
});
