import {Paper} from "@material-ui/core";
import {AddTweetForm} from "components/AddTweetForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {useHomeStyles} from "pages/Home/theme";
import {ITweet} from "store/ducks/tweets/contracts/state";
import {Tweet} from "components/Tweet";
import { useOutletContext } from "react-router-dom";

interface IAllTweets {
  classes: ReturnType<typeof useHomeStyles>;
  isLoading: boolean;
  tweets: ITweet[];
}

export const AllTweets: React.FC = () => {
  const {classes, isLoading, tweets} = useOutletContext<IAllTweets>()

  return (
    <>
      <Paper>
        <div className={classes.addForm}>
          <AddTweetForm classes={classes}/>
        </div>
        <div className={classes.addFormBottomLine}/>
      </Paper>

      {isLoading ? (
        <div className={classes.tweetsCentred}>
          <CircularProgress/>
        </div>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
      )}
    </>
  )
}
