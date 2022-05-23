import axios from 'axios';
import { ITweet, TweetsState } from 'store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('/tweets').then(({ data }) => data);
  },
  fetchTweetData(id: string): Promise<ITweet[]> {
    return axios.get('/tweets?_id=' + id).then(({ data }) => data);
  },
};
