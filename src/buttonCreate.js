
function buttonCreate() {
  const button = document.getElementById('pages');
  const page = document.createElement('button');
  page.id = 'pageNumber';
  button.appendChild(page);
}

export default buttonCreate;
