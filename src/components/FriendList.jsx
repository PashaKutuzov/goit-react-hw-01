import css from "./FriendList.module.css"
import FriendListItem from "./FriendListItem";
export default function FriendList({friends} ){
    return(
      
        
       <ul className={css.friendsContainer}>

{friends.map(({id, avatar, name, isOnline}) => (
  <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />

  ))}
       </ul>
 );
  
}




   

 