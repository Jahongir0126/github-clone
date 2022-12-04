import React from "react"
import "./profile.scss"
import { Link } from "react-router-dom"
import api from "../../Api/index"
import { useEffect, useState } from "react"

export default function index() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await api.userData()
      setUserData(data)
    }
    getUserData()
  })

  return (
    <>
      <div className="profile__container">
        <div className="profile">
          <img
            className=" profile__img rounded-circle"
            src={userData.avatar_url}
            alt="avatar"
          />
          <div className="profile__content">
            <h3 className="profile__userName">{userData.name}</h3>
            <h3 className="profile__userLink">{userData.login}</h3>
            <h4 className="profile__bio">{userData.bio}</h4>
            <button className="btn btn-light">Edit Profile</button>
            <Link to={"/followers"} className="profile__link">
              <svg
                text="muted"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="me-2"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                ></path>
              </svg>
              {userData.followers} followers
            </Link>
            <Link className="profile__link" to={"/following"}>
              <svg
                text="muted"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="me-2"
              >
                <path
                  fillRule="evenodd"
                  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                ></path>
              </svg>{" "}
              {userData.following} following
            </Link>
            <p>
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              {userData.location}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
