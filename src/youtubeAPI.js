import buildVideoInfo from './buildVideoBar.js';

function request(frase, pageToken) {
  const videos = [];
  let videoCount = 0;
  let currentVideoCount = 0;
  let downloadVideo = 0;
  let requestFrase;
  if (pageToken === 0) {
    requestFrase = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${frase}&type=video&maxResults=15&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U&`;
  } else requestFrase = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${frase}&type=video&maxResults=15&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U&pageToken=${pageToken}`;
  return fetch(requestFrase)
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((element) => {
        videos[videoCount] = {
          title: element.snippet.title,
          channels: element.snippet.channelTitle,
          description: element.snippet.description,
          date: element.snippet.publishedAt.substring(0, 10),
          pictureUrl: element.snippet.thumbnails.medium.url,
          id: element.id.videoId,
        };
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videos[downloadVideo].id}&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U`)
          .then((response) => response.json())
          .then((data) => {
            const videoInfo = data.items[0];
            videos[currentVideoCount].views = videoInfo.statistics.viewCount;
            buildVideoInfo(videos[currentVideoCount]);
            currentVideoCount += 1;
          });
        videoCount += 1;
        downloadVideo += 1;
      });
      return data.nextPageToken;
    });
}
export default request;
