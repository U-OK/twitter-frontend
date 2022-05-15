import { call, put, takeLatest } from 'redux-saga/effects';
import { TweetsApi } from 'services/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import {LoadingState, Tweet} from './contracts/state';

export function* fetchTweetsRequest(): Generator<ReturnType<any>, any, Tweet[]> {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
