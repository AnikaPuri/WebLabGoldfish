import React, { useState, useEffect } from "react";

import { get } from "../../utilities";

const Explore = (props) => {
  const [users, setUsers] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    get("/api/users").then((userObjs) => {
      setUsers(userObjs)
    });
  }, []);

//   let storiesList = null;
//   const hasStories = stories.length !== 0;
//   if (hasStories) {
//     storiesList = stories.map((storyObj) => (
//       <Card
//         key={`Card_${storyObj._id}`}
//         _id={storyObj._id}
//         creator_name={storyObj.creator_name}
//         creator_id={storyObj.creator_id}
//         userId={props.userId}
//         content={storyObj.content}
//       />
//     ));
//   } else {
//     storiesList = <div>No stories!</div>;
//   }
//   return (
//     <>
//       {props.userId && <NewStory addNewStory={addNewStory} />}
//       {storiesList}
//     </>
//   );
  return (  
    <div> 
      {JSON.stringify(users)} 
      <img src="gf1.PNG"></img>
    </div>   
  )
};

export default Explore;
