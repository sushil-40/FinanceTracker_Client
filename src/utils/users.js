import { getUser } from "../../helpers/axiosHelper";

export const autoLogin = async () => {
  const accessJWT = localStorage.getItem("accessJWT");
  if (accessJWT) {
    //call api to get user

    // const response = await getUser();
    // console.log(response);

    const { status, user } = await getUser();
    return status === "success" ? user : {};
    // mount user in the state
  }
};
