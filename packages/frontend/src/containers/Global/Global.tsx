import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Toast from '../../components/Toast';
import { selectGlobalStore } from './reducer';
import { Wrapper } from './styles';

function Global() {
  const { errorMessages, successMessages } = useSelector(selectGlobalStore);
  React.useEffect(() => {
    errorMessages.map((error) => (
      Toast.error(error)
    ));
  }, [errorMessages]);

  React.useEffect(() => {
    successMessages.map((error) => (
      Toast.success(error)
    ));
  }, [successMessages]);

  return (
    <>
      <Wrapper />
      <ToastContainer />
    </>
  );
}

export default React.memo(Global);
