export const GOOGLE_API_KEY = "AIzaSyCc8XDpc_k7LDY1YM1_4iSGpR_4lIuFOEw";
const RAPID_API_KEY = "8849ac5c6fmsh861e552e7209d72p1927e6jsnbac07603b3fe";
export const YOUTUBE_API_KEY = "AIzaSyCLQpGjWFvsly0CFzcbXYZsV185Xv1jJK8";



export const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': RAPID_API_KEY ,
		'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
	}
};

export const YOUTUBE_SEARCH_API_URL ="https://youtube-data8.p.rapidapi.com/auto-complete/?q=";

export const SUGGESTED_VIDEO_URL ='https://youtube-v31.p.rapidapi.com/search?relatedToVideoId='


export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&q=";

export const YOUTUBE_SEARCH_VIDEO_LIST =  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=' 


export const LIVE_CHAT_COUNT = 20;