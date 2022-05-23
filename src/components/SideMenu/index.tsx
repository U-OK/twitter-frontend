import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Theme, useMediaQuery} from "@material-ui/core";
import {ModalBlock} from "components/ModalBlock";
import {AddTweetForm} from "components/AddTweetForm";
import {useHomeStyles} from "pages/Home/theme";
import {Link} from 'react-router-dom';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
                                                    classes,
                                                  }: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setSetVisibleAddTweet] = React.useState<boolean>(false);
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const handleClickOpenAddTweet = () => {
    setSetVisibleAddTweet(true);
  };

  const onCloseAddTweet = () => {
    setSetVisibleAddTweet(false);
  };


  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <TwitterIcon className={classes.logoIcon}/>
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon}/>
          {!hidden && (
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Поиск
            </Typography>
          )}
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon}/>

          {!hidden && (
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>
          )}
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon}/>

          {!hidden && (
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>
          )}
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon}/>

          {!hidden && (
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>
          )}
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon}/>

          {!hidden && (
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Список
            </Typography>
          )}
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon}/>

          {!hidden && (
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>
          )}
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          {hidden ? <CreateIcon/> : 'Твитнуть'}
        </Button>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
          <div style={{width: 550}}>
            <AddTweetForm maxRows={15} classes={classes}/>
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};
