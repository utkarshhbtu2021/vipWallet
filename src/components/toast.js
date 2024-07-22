export const showToast = (type, text1, position = 'bottom') => {
  Toast.show({
    type, // options: 'success', 'error', 'info'
    text1,
    position, // options: 'top', 'bottom'
    visibilityTime: 3000, // duration in milliseconds
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    props: {
      backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
      textColor: '#000',
    },
  });
};