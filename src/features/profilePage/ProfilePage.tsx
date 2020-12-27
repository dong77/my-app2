import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Navbar from "features/navbar/Navbar";
const ProfilePage = () => {
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
      <div>Profile Page</div>
    </React.Fragment>
  );
};

export default ProfilePage;
