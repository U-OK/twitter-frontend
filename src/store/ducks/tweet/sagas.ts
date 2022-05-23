import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from 'services/api/tweetsApi';
import { ITweet } from '../tweets/contracts/state';
import { FetchTweetDataActionInterface, TweetActionsType } from './contracts/actionTypes';
import { LoadingState } from './contracts/state';
import {setTweetData, setTweetLoadingState} from "store/ducks/tweet/actionCreator";

export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataActionInterface) {
  try {
    const data: ITweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest);
}
