import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_API_AUTHENTICATION}/account`;
// import get from "lodash-es/get";

interface authBodytypes {
  email?: String;
  password?: String | Number;
}

const APIHelper = () => ({
  signIn: async (body: authBodytypes) => {
    try {
      const payload = await axios.post(`${BASE_URL}/login`, body);
      // if (payload.data.accessToken && payload.data.refreshToken)
      // return first
      if (payload.data.accessToken) {
        return payload.data;
      }

      throw new Error(
        `[SignIn] Invalid sign in response ${JSON.stringify(payload.data)}`,
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  // refreshToken: async (authUser) => {
  // 	let params = {
  // 		refreshToken: authUser.refreshToken,
  // 	};
  // 	try {
  // 		const payload = await axios.get(BASE_URL + `/refresh/${authUser.id}`, {
  // 			params: { ...params, vendorId: authUser.vendorId },
  // 		});
  // 		return payload.data;
  // 	} catch (error) {
  // 		const codeError = get(error, "response.data.code");
  // 		if (codeError === "2005") {
  // 			throw new Error("The account has logged in on another device!");
  // 		} else throw new Error(error);
  // 	}
  // },
});

export const Auth = APIHelper();
export default {
  Auth,
};
