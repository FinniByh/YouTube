function building() {
  const searchBar = document.createElement('div');
  const searchField = document.createElement('input');
  const searchButton = document.createElement('button');
  const mainBar = document.createElement('div');
  const innerMainBar = document.createElement('div');

  searchField.id = 'searchField';
  searchButton.id = 'button';
  searchBar.id = 'searchBar';
  mainBar.id = 'mainBar';
  innerMainBar.id = 'innerMainBar';

  searchButton.innerHTML = '<i class="fa fa-search"></i>';

  document.body.appendChild(searchBar);
  searchBar.appendChild(searchButton);
  searchBar.appendChild(searchField);
  document.body.appendChild(mainBar);
  mainBar.appendChild(innerMainBar);

  const buttons = document.createElement('div');
  const outerPages = document.createElement('div');
  const pages = document.createElement('div');
  buttons.classList.add('buttons');
  buttons.id = 'buttonList';
  pages.id = 'pages';
  outerPages.id = 'outerPages';

  const leftButton = document.createElement('button');
  leftButton.id = 'leftButton';
  const rightButton = document.createElement('button');
  rightButton.id = 'rightButton';

  document.body.appendChild(buttons);
  buttons.appendChild(leftButton);
  buttons.appendChild(outerPages);
  outerPages.appendChild(pages);
  buttons.appendChild(rightButton);

  leftButton.innerHTML = '<i class="fa fa-arrow-left"></i>';
  rightButton.innerHTML = '<i class="fa fa-arrow-right"></i>';
}

export default building;
