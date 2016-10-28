export function addReminder(value) {
  
  //Normal Approach
  // return {
  //   type: 'ADD_ITEM',
  //   payload: value
  // }

  // Promise Approach
  return {
    type: 'ADD_ITEM',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    })
  }

  //Function Approach
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: 'ADD_ITEM',
  //       payload: value
  //     })
  //   }, 2000);
  // }
  //

}
