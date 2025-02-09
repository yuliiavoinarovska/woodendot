document.addEventListener("DOMContentLoaded", () => {
  //BURGER MENU
  const burgerBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__nav");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  function toggleMenu() {
    menu.classList.toggle("header__nav_active");
    overlay.classList.toggle("overlay_active");
    burgerBtn.classList.toggle("burger-btn_active");

    if (menu.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }

  burgerBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // MODAL WINDOW
  const modalTrigger = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("modal_show");
      modal.classList.remove("modal_hide");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modal.classList.add("modal_hide");
    modal.classList.remove("modal_show");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  });

  // SWIPER SLIDERS
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

  const reviewsSwiper = new Swiper(".reviews-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".reviews-slider .swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },

      1024: {
        slidesPerView: 1,
      },
    },
  });

  // FORM
  document
    .querySelector("#form")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      let name = document.querySelector("#name").value;
      let lastName = document.querySelector("#lastName").value;
      let email = document.querySelector("#email").value;
      let phone = document.querySelector("#phone").value;
      let message = document.querySelector("#message").value;

      // Текст повідомлення
      let text = `📝 Нова заявка:\n\n👤 Ім'я: ${name} ${lastName}\n📧 Email: ${email}\n📞 Телефон: ${phone}\n💬 Повідомлення: ${message}`;

      // Мій токен та chat_id
      let botToken = "7510297541:AAHmO586YPeqDk4z0h75CvEd6BJL6KR9ZDc";
      let chatId = "1364806471";

      let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        text
      )}`;

      // Відправка запиту
      try {
        let response = await fetch(url);
        if (response.ok) {
          alert("Форма успішно відправлена!");
        } else {
          alert("Помилка при відправці");
        }
      } catch (error) {
        alert("Помилка: " + error.message);
      }
    });

  // FORM CHECKING
  const form = document.getElementById("form");
  const submitBtn = document.getElementById("submitBtn");
  const inputs = form.querySelectorAll("input, textarea");

  function checkFormCompletion() {
    let isFormComplete = true;

    inputs.forEach((input) => {
      const errorMessage = document.getElementById(input.id + "Error");

      if (input.value.trim() === "") {
        if (errorMessage && input.classList.contains("touched")) {
          errorMessage.style.display = "inline";
        }
        isFormComplete = false;
      } else {
        if (errorMessage) {
          errorMessage.style.display = "none";
        }
      }
    });

    submitBtn.disabled = !isFormComplete;
  }

  inputs.forEach((input) => {
    input.addEventListener("blur", () => {
      input.classList.add("touched");
      checkFormCompletion();
    });

    input.addEventListener("input", checkFormCompletion);
  });

  form.addEventListener("submit", function (event) {
    if (submitBtn.disabled) {
      event.preventDefault();
      checkFormCompletion();
    }
  });
});
