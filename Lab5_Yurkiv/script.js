// ===== Завдання 1 =====
function convertToCelsius() {
  let f = parseFloat(document.getElementById("fahrenheit").value);
  if (!isNaN(f)) {
    document.getElementById("celsius").value = ((5 / 9) * (f - 32)).toFixed(2);
  } else {
    document.getElementById("celsius").value = "";
  }
}

function convertToFahrenheit() {
  let c = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(c)) {
    document.getElementById("fahrenheit").value = ((9 / 5) * c + 32).toFixed(2);
  } else {
    document.getElementById("fahrenheit").value = "";
  }
}

// ===== Завдання 2 (введення) =====
let correct2 = 0;
let total2 = 0;
let currentA2, currentB2;

function nextTask2() {
  currentA2 = Math.floor(Math.random() * 10) + 1;
  currentB2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("task2").textContent =
    currentA2 + " × " + currentB2 + " = ";
  document.getElementById("answer2").value = "";
  document.getElementById("result2").textContent = "";
}

function checkAnswer2() {
  let ans = parseInt(document.getElementById("answer2").value);
  total2++;
  if (ans === currentA2 * currentB2) {
    correct2++;
    nextTask2();
    document.getElementById("result2").textContent = "Правильно!";
    
  } else {
    nextTask2();
    document.getElementById("result2").textContent =
      "Помилка, правильна відповідь <" + currentA2 * currentB2 + ">";
  }
  let percent = ((correct2 / total2) * 100).toFixed(0);
  document.getElementById("score2").textContent =
    "Загальний рахунок " +
    percent +
    "% (" +
    correct2 +
    " правильних відповідей з " +
    total2 +
    ")";
}

// ===== Завдання 3 (радіокнопки) =====
let correct3 = 0;
let total3 = 0;
let currentA3, currentB3, correctAnswer3;

function nextTask3() {
  document.getElementById("result3").textContent = "";

  currentA3 = Math.floor(Math.random() * 10) + 1;
  currentB3 = Math.floor(Math.random() * 10) + 1;
  correctAnswer3 = currentA3 * currentB3;

  document.getElementById("task3").textContent =
    currentA3 + " × " + currentB3 + " = ?";

  // генеруємо варіанти відповідей
  let answers = new Set();
  answers.add(correctAnswer3);
  while (answers.size < 4) {
    answers.add(correctAnswer3 + Math.floor(Math.random() * 10) - 5);
  }

  let options = Array.from(answers).sort(() => Math.random() - 0.5);
  let form = document.getElementById("answers3");
  form.innerHTML = "";

  options.forEach((val) => {
    let label = document.createElement("label");
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option3";
    radio.value = val;
    radio.onclick = checkAnswer3;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + val));
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
  });
}

function checkAnswer3(event) {
  let selected = parseInt(event.target.value);
  total3++;
  if (selected === correctAnswer3) {
    correct3++;
    document.getElementById("result3").textContent = "Правильно!";
  } else {
    document.getElementById("result3").textContent =
      "Помилка, правильна відповідь <" + correctAnswer3 + ">";
  }

  let radios = document.getElementsByName("option3");
  for (let r of radios) r.disabled = true;

  let percent = ((correct3 / total3) * 100).toFixed(0);
  document.getElementById("score3").textContent =
    "Загальний рахунок " +
    percent +
    "% (" +
    correct3 +
    " правильних відповідей з " +
    total3 +
    ")";
}
    // ===== Завдання 4 (Галерея) =====
let perfumeImagesArray = [
  {
    path: "images/perfume1.jpg",
    title: "Chanel No. 5",
    description: "Іконічний квітковий альдегідний аромат.",
  },
  {
    path: "images/perfume2.jpg",
    title: "Dior Sauvage",
    description: "Свіжий та деревний аромат для чоловіків.",
  },
  {
    path: "images/perfume3.jpg",
    title: "Creed Aventus",
    description: "Фруктовий шипровий аромат.",
  },
];

let currentImageIndex = 0;
function initPhotoRotator(divId, imagesArray) {
    const rotatorDiv = document.getElementById(divId);

    const container = document.createElement('div');
    container.classList.add('rotator-container');

    const photoCounter = document.createElement('div');
    photoCounter.id = 'photoCounter';
    photoCounter.classList.add('photo-counter');

    const imageAndButtonsContainer = document.createElement('div');
    imageAndButtonsContainer.classList.add('image-buttons-wrapper');

    const prevLink = document.createElement('a');
    prevLink.id = 'prevLink';
    prevLink.href = 'javascript:void(0)';
    prevLink.textContent = 'Назад';
    prevLink.classList.add('rotator-link', 'prev-link');
    prevLink.onclick = () => showImage(imagesArray, currentImageIndex - 1);
    
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-frame'); 

    const img = document.createElement('img');
    img.id = 'galleryImage';
    img.alt = 'Зображення парфуму';
    img.classList.add('gallery-image');

    imageContainer.appendChild(img);

    const nextLink = document.createElement('a');
    nextLink.id = 'nextLink';
    nextLink.href = 'javascript:void(0)';
    nextLink.textContent = 'Вперед';
    nextLink.classList.add('rotator-link', 'next-link'); 
    nextLink.onclick = () => showImage(imagesArray, currentImageIndex + 1);

    imageAndButtonsContainer.appendChild(prevLink);
    imageAndButtonsContainer.appendChild(imageContainer);
    imageAndButtonsContainer.appendChild(nextLink);

    const titleDiv = document.createElement('div');
    titleDiv.id = 'imageTitle';
    titleDiv.classList.add('image-title');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'imageDescription';
    descriptionDiv.classList.add('image-description');


    container.appendChild(photoCounter);
    container.appendChild(imageAndButtonsContainer);
    container.appendChild(titleDiv);
    container.appendChild(descriptionDiv);
    
    rotatorDiv.appendChild(container);

    showImage(imagesArray, 0);
}

function showImage(imagesArray, index) {
    currentImageIndex = index;
    const currentImage = imagesArray[currentImageIndex];
    const totalImages = imagesArray.length;

    document.getElementById('photoCounter').textContent = 
        `Фотографія ${currentImageIndex + 1} з ${totalImages}`;

    document.getElementById('galleryImage').src = currentImage.path;
    document.getElementById('imageTitle').textContent = currentImage.title;
    document.getElementById('imageDescription').textContent = currentImage.description;

    const prevLink = document.getElementById('prevLink');
    const nextLink = document.getElementById('nextLink');

    prevLink.style.visibility = (currentImageIndex === 0) ? 'hidden' : 'visible';
    nextLink.style.visibility = (currentImageIndex === totalImages - 1) ? 'hidden' : 'visible';
}

initPhotoRotator('rotator', perfumeImagesArray); 
    // ===== Завдання 5 (Сaptcha) =====
const digitPatterns = {
    0: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    1: [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1]
    ],
    2: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1]
    ],
    3: [
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    4: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ],
    5: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ],
    6: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    7: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    8: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ],
    9: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 0, 1],
        [1, 1, 1]
    ]
};

let currentCaptchaValue = "";

function initCaptcha(digitCount) {
    let captchaString = "";
    const displayElement = document.getElementById("captcha-display");
    displayElement.innerHTML = "";

    for (let i = 0; i < digitCount; i++) {
        const randomDigit = Math.floor(Math.random() * 10); 
        captchaString += randomDigit.toString();
        
        displayDigit(randomDigit, displayElement);
    }

    currentCaptchaValue = captchaString;
    document.getElementById("captcha-input").value = "";
    clearCaptchaStatus();
    console.log("Нова CAPTCHA (для перевірки): " + currentCaptchaValue);
}

function displayDigit(digit, container) {
    const pattern = digitPatterns[digit];
    if (!pattern) return;

    const digitDiv = document.createElement('div');
    digitDiv.classList.add('captcha-digit');
    for (let row of pattern) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('captcha-row');
        for (let pixel of row) {
            const pixelSpan = document.createElement('span');
            pixelSpan.classList.add('captcha-pixel');
            if (pixel === 1) {
                pixelSpan.classList.add('pixel-on'); 
            }
            rowDiv.appendChild(pixelSpan);
        }
        digitDiv.appendChild(rowDiv);
    }
    container.appendChild(digitDiv);
}

function checkCaptcha() {
    const userInput = document.getElementById("captcha-input").value;
    const statusElement = document.getElementById("captcha-status");
    
    if (userInput === currentCaptchaValue) {
        statusElement.textContent = "Успіх!";
        statusElement.className = "success-message";
        setTimeout(() => initCaptcha(currentCaptchaValue.length), 1500); 
    } else {
        statusElement.textContent = "Помилка";
        statusElement.className = "error-message";
        setTimeout(() => initCaptcha(currentCaptchaValue.length), 1500); 
    }
}
function clearCaptchaStatus() {
    const statusElement = document.getElementById("captcha-status");
    statusElement.textContent = "";
    statusElement.className = "";
}

initCaptcha(Math.floor(Math.random() * 4) + 3);
