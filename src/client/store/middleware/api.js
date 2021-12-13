import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }

  const {
    baseUrl,
    url,
    method,
    headers,
    body,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  const handleError = (error) => {
    //General
    dispatch(actions.apiCallFailed(error.message)); //General
    if (onError) {
      dispatch({ type: onError, payload: error.message }); //Action-specific
    }
  };

  if (onStart) {
    dispatch({type: onStart});
  }
  next(action);

  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers,
      body,
    });

    if (!response.ok) {
      handleError(new Error(response.statusText));
    }

    const responseData = await response.json();

    //General
    dispatch(actions.apiCallSuccess(responseData));
    if (onSuccess) {
      dispatch({ type: onSuccess, payload: responseData });
    }
  } catch (error) {
    handleError(error);
  }
};

export default api;
