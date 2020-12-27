import Navbar from "features/navbar/Navbar";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const AccountPage = () => {
  const dispatch = useDispatch();
  // const globalConfig = useSelector(selectGlobalConfig, shallowEqual)

  // useEffect(() => {
  //   if (!isGlobalConfigLoaded(globalConfig)) {
  //     dispatch(fetchGlobalConfig())
  //   }
  // }, [globalConfig])
  return (
    <React.Fragment>
      <Navbar />
      <div>Account Page</div>
    </React.Fragment>
  );
};

export default AccountPage;

