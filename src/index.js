import request from './youtubeAPI.js';
import building from './initial.js';

import style from "./style.css";

let token;
let currentToken;
let currentRequest;
let currentPage = 0;
let pageCount = 0;
let currentLeft = 0;
let currentPagesLeft = 0;
let mouseDown;
let mouseUp;

building();

function requestAsking() {
  if (currentRequest !== document.getElementById('searchField').value) {
    if (currentRequest !== undefined) {
      while (document.getElementById('pages').firstChild) document.getElementById('pages').removeChild(document.getElementById('pages').firstChild);
    }
    while (document.getElementById('innerMainBar').firstChild) document.getElementById('innerMainBar').removeChild(document.getElementById('innerMainBar').firstChild);
    currentRequest = document.getElementById('searchField').value;
    currentPage = 0;
    pageCount = 0;
    currentLeft = 0;
    document.getElementById('innerMainBar').style.left = '0';
    if (currentRequest !== '') {
      token = request(currentRequest, 0)
        .then ((response) => {
          currentToken = response;
        });
    }
  } else {
    token = request(currentRequest, currentToken)
      .then ((response) => {
        currentToken = response;
      });
  }
}

document.addEventListener('keydown', (key) => {
  if (key.keyCode === 13) {
    if (currentRequest !== document.getElementById('searchField').value) {
      requestAsking();
      document.getElementById('buttonList').style.display = 'flex';
      const pageButton = document.getElementById('pages');

      const page = document.createElement('button');
      page.id = 'pageNumber';

      pageButton.appendChild(page);
      pageCount += 1;
      currentPage += 1;
      page.classList.add(currentPage);
      page.textContent = currentPage;
    }
  }
});

const button = document.getElementById('button');
button.addEventListener('click', () => {
  requestAsking();
  for (let i = 0; i < list.length - 1; i += 1) {
    buildVideoInfo(list[i]);
  }
  document.getElementById('buttonList').style.display = 'flex';
  const pageButton = document.getElementById('pages');

  const page = document.createElement('button');
  page.id = 'pageNumber';

  pageButton.appendChild(page);
  pageCount += 1;
  currentPage += 1;
  page.classList.add(currentPage);
  page.textContent = currentPage;
});

function swipeRight() {
  document.getElementById('pages').childNodes[currentPage - 1].style.backgroundColor = 'red';
  currentPage += 1;
  if (currentPage === pageCount + 1) {
    const pageButton = document.getElementById('pages');

    const page = document.createElement('button');
    page.id = 'pageNumber';
    page.classList.add(currentPage);
    pageButton.appendChild(page);
    page.textContent = currentPage;
    pageCount += 1;
    if (document.documentElement.clientWidth >= 1200) {
      if (pageCount % 4 === 0) {
        requestAsking();
      }
    }
    if (document.documentElement.clientWidth >= 900
      && document.documentElement.clientWidth < 1200) {
      if (pageCount % 5 === 0) {
        requestAsking();
      }
    }
    if (document.documentElement.clientWidth >= 600 && document.documentElement.clientWidth < 900) {
      if (pageCount % 8 === 0) {
        requestAsking();
      }
    }
    if (document.documentElement.clientWidth < 600) {
      if (pageCount % 15 === 0) {
        requestAsking();
      }
    }
  }
  currentLeft -= document.documentElement.clientWidth;
  document.getElementById('innerMainBar').style.left = `${currentLeft}px`;
  document.getElementById('pages').childNodes[currentPage - 1].style.backgroundColor = 'green';
  if (currentPage > 5) {
    currentPagesLeft -= 50;
    document.getElementById('pages').style.left = `${currentPagesLeft}px`;
  } 
}

function swipeLeft() {
  if (currentPage !== 1) {
    document.getElementById('pages').childNodes[currentPage - 1].style.backgroundColor = 'red';
    currentPage -= 1;
    currentLeft += document.documentElement.clientWidth;
    document.getElementById('innerMainBar').style.left = `${currentLeft}px`;
    document.getElementById('pages').childNodes[currentPage - 1].style.backgroundColor = 'green';
    if (currentPage > 4) {
      currentPagesLeft += 50;
      document.getElementById('pages').style.left = `${currentPagesLeft}px`;
    } 
  }
}

const left = document.getElementById('leftButton');
const right = document.getElementById('rightButton');

left.addEventListener('click', () => {
  swipeLeft();
});

right.addEventListener('click', () => {
  swipeRight();
});

const mainBar = document.getElementById('innerMainBar');
mainBar.addEventListener('mousedown', (e) => {
  mouseDown = e.screenX;
});
mainBar.addEventListener('mouseup', (e) => {
  mouseUp = e.screenX;
});
mainBar.addEventListener('click', () => {
  if (mouseDown < mouseUp && mouseUp - mouseDown > 50) {
    swipeLeft();
  } else if (mouseDown > mouseUp && mouseDown - mouseUp > 50) {
    swipeRight();
  }
});

const buttons = document.getElementById('pages');
buttons.addEventListener('click', (e) => {
  const currentButton = document.elementFromPoint(e.clientX, e.clientY);
  if (currentButton.id !== 'pages') {
    const buttonPage = currentButton.classList.value;
    currentLeft += (currentPage - buttonPage) * document.documentElement.clientWidth;
    if (buttonPage > 5) {
      currentPagesLeft = -((buttonPage - 5) * 50);
      document.getElementById('pages').style.left = `${currentPagesLeft}px`;
    }
    document.getElementById('pages').childNodes[currentPage - 1].style.backgroundColor = 'red';
    currentPage = +buttonPage;
    document.getElementById('innerMainBar').style.left = `${currentLeft}px`;
    document.getElementById('pages').childNodes[currentPage - 1].style.backgroundColor = 'green';
  }
});
