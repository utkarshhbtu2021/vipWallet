// reducer.js
export const initialState = {
  walletName: '',
  email: '',
  password: '',
  loading: false,
  error: null,
  success: false,
  emailError: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SET_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case 'RESET':
        return {
          ...initialState,
        };
    default:
      return state;
  }
};
