
function buildVideoBar(videoInfo) {
  const videoList = document.getElementById('innerMainBar');
  const video = document.createElement('div');

  const viewTitle = document.createElement('div');
  const channel = document.createElement('div');
  const date = document.createElement('div');
  const views = document.createElement('div');
  const description = document.createElement('div');

  viewTitle.id = 'viewTitle';
  video.id = 'video';
  channel.id = 'channel';
  date.id = 'date';
  views.id = 'views';

  const titleText = document.createElement('div');
  titleText.id = 'titleText';
  titleText.innerHTML = `<a href="https://www.youtube.com/watch?v=${videoInfo.id}" style="color:white">${videoInfo.title}</a>`;
  viewTitle.appendChild(titleText);
  const channelPicture = document.createElement('div');
  channelPicture.innerHTML = '<i class="fa fa-male"></i>';
  const channelText = document.createElement('span');
  channelPicture.id = 'channelPicture';
  channelText.id = 'channelText';
  channelText.textContent = videoInfo.channels;
  channel.appendChild(channelPicture);
  channel.appendChild(channelText);
  const datePicture = document.createElement('div');
  datePicture.innerHTML = '<i class="fa fa-calendar"></i>';
  const dateText = document.createElement('span');
  datePicture.id = 'datePicture';
  dateText.id = 'dateText';
  dateText.textContent = videoInfo.date;
  date.appendChild(datePicture);
  date.appendChild(dateText);
  const viewsPicture = document.createElement('div');
  viewsPicture.innerHTML = '<i class="fa fa-eye"></i>';
  const viewsText = document.createElement('span');
  viewsPicture.id = 'viewsPicture';
  viewsText.id = 'viewsText';
  viewsText.textContent = videoInfo.views;
  views.appendChild(viewsPicture);
  views.appendChild(viewsText);
  description.id = 'description';
  description.textContent = videoInfo.description;
  viewTitle.style.backgroundImage = `url(${videoInfo.pictureUrl})`;

  videoList.appendChild(video);
  video.appendChild(viewTitle);
  video.appendChild(channel);
  video.appendChild(date);
  video.appendChild(views);
  video.appendChild(description);
}

export default buildVideoBar;
