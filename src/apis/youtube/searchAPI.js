import { youtubeAPI } from '../youtubeURL';

export const youtubeSearch = async (keyword) => {
  const { data } = await youtubeAPI.get('search', {
    params: {
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      q: keyword
    }
  });
  return data;
};

// part: 'snippet', maxResults: 25, chart: 'mostPopular'
