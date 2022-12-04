import React from "react"
import moment from "moment/moment"
import "./repos.scss"
import api from "../../Api"

import { useState , useEffect } from "react"

export default function index() {
  const [reposData, setReposData] = useState([])

  useEffect(() => {
    const getReposData = async () => {
      const { data } = await api.reposData()
      setReposData(data)
    }
    getReposData()

  },[])



  return (
    <div className="col-8 pt-3">
      {
        reposData.map(( item ,index)=>{
          return(
          <div key={index} className="repos">
        <div className="repos__title">
          <a href={item.svn_url} target={"_blank"}>{item.name}</a>
          <span>{item.visibility}</span>
          <div className="repos__language">
            <span>{item.language}</span>
            <span className="repos__star__count">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                fill="rgb(106, 106, 106)"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                ></path>
              </svg>
              {item.stargazers_count}
            </span>
            <span>
              {" "}
              Update on {moment(item.updated_at).format(" MMMM DD")}
            </span>
          </div>
        </div>
        <div className="repos__star">
          <span>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            Star
          </span>
        </div>
      </div>
      )
        })
      }
    </div>
  )
}
