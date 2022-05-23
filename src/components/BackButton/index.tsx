import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate  } from 'react-router-dom';

export const BackButton: React.FC = (): React.ReactElement => {
  const navigate = useNavigate ();

  const handleClickButton = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={handleClickButton} style={{ marginRight: 20 }} color="primary">
      <ArrowBackIcon />
    </IconButton>
  );
};
