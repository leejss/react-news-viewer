import * as api from '../lib/api';

const GET_NEWS = 'news/GET_NEWS';
const GET_NEWS_SUCCESS = 'news/GET_NEWS_SUCCESS';
const GET_NEWS_FAILURE = 'news/GET_NEWS_FAILURE';

// thunk action creator
// async call
export const getNews = (query) => async (dispatch) => {
  dispatch({ type: GET_NEWS });
  try {
    const response = await api.getNews(query);
    dispatch({
      type: GET_NEWS_SUCCESS,
      payload: response.data.articles,
    });
  } catch (err) {
    dispatch({
      type: GET_NEWS_FAILURE,
      payload: err,
      error: true,
    });
    throw err;
  }
};

const initialState = {
  loading: {
    GET_NEWS: false,
  },
  articles: [],
  error: {
    GET_NEWS: null,
  },
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        loading: {
          GET_NEWS: true,
        },
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: {
          GET_NEWS: false,
        },
        articles: action.payload,
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        loading: {
          GET_NEWS: false,
        },
        error: {
          GET_NEWS: action.payload,
        },
      };
    default:
      return state;
  }
};

export default news;
