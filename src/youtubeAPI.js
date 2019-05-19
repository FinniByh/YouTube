import buildVideoInfo from './buildVideoBar.js';

function request(frase, pageToken) {
  const videos = [];
  let videoCount = 0;
  let something;
  let request;
  if (pageToken === 0) {
    request = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${frase}&type=video&maxResults=15&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U&`;
  } else request = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${frase}&type=video&maxResults=15&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U&pageToken=${pageToken}`;
  something = fetch(request)
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
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videos[videoCount].id}&key=AIzaSyCIpXSu-HrgdiPr4O1MBV4_eimDgJCm_6U`)
          .then((response) => response.json())
          .then((data) => {
            const videoInfo = data.items[0];
            videos[videoCount].views = videoInfo.statistics.viewCount;
          });
        videoCount += 1;
      });
      for (let i = 0; i < videos.length - 1; i += 1) {
        buildVideoInfo(videos[i]);
      }
      return data.nextPageToken;
    });
  return something;
}
export default request;
