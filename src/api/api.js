// import 'whatwg-fetch';
import mocks from './_mocks';

// const API_ENDPOINT = 'http://localhost:1337/api';

export function apiRequest(method, body) {
  return mocks[method](body);
}

//   return new Promise(async (resolve, reject) => {
//     try {
//       let data = await fetch(`${API_ENDPOINT}/${method}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify(body),
//       })
//       data = await data.json();
//       if (data.error) {
//         throw data.error;
//       } else {
//         resolve(data);
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// }