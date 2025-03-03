import css from "./FriendList.module.css"

export default function FriendList({friends} ){
    return(
      
        
       <ul className={css.friendsContainer}>

{friends.map(({id, avatar, name, isOnline}) => (

<li className={css.friendsIistItem} key={id}>
 <div className={css.container} >
 <img className={css.icon} src={avatar} alt="Avatar" width="70" />
   <p className={css.usreName}> {name}</p>
   <p className={css.isOnline} style={{ color: isOnline ? "green" : "red"}}>{isOnline  ? `online` : `offline`}</p>
  </div>
</li>
  ))}
       </ul>
 )
  
}




   

 