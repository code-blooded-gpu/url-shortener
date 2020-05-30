import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./MyURLs.css";
import Title from "../../shared/components/UIElements/Title/Title";
import Card from "../../shared/components/UIElements/Card/Card";
import MyURL from "./MyURL/MyURL";
import { RootState } from "../../shared/store/index";
import { thunkMyURLs } from "../store/thunkAsyncActionCreators";

const MyURLs: React.FC = () => {
  const url = useSelector((state: RootState) => {
    return state.url;
  });
  const token = useSelector((state: RootState) => {
    return state.user.token;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(thunkMyURLs(token));
    }
  }, [token, dispatch]);

  return (
    <Card classes="home-card">
      <Title classes="home-title">
        {url.urls.length !== 0 ? "MyURLs" : "No URL found"}
      </Title>
      <div className="myurls-wrapper">
        {url.urls.length !== 0 &&
          url.urls.map((url) => (
            <MyURL
              key={url.id}
              url={url.url}
              id={url.id}
              expiresIn={url.expiresIn}
              shortUrl={url.shortUrl}
            />
          ))}
      </div>
    </Card>
  );
};

export default MyURLs;
