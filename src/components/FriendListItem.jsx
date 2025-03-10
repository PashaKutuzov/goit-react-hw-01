
import css from "./FriendList.module.css"


export default function FriendListItem({avatar, name, isOnline}) {
  return(
  <li className={css.friendsListItem} >
 <div className={css.container} >
 <img className={css.icon} src={avatar} alt="Avatar" width="70" />
   <p className={css.usreName}> {name}</p>
   <p className={css.isOnline} style={{ color: isOnline ? "green" : "red"}}>{isOnline  ? `online` : `offline`}</p>
  </div>
</li>
)
}