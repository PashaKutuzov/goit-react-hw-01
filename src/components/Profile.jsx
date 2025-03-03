

import css from "./Profile.module.css"

export default function Profile ({name, tag, location, image, stats}) {
    return(
<div className={css.container}>
        <div>
          <img className={css.icon} src={image} alt="image" width={100}/>
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.listContainer}>
<li className={css.listItem}>
    <span>Followers</span>
    <span>{stats.followers}</span>
</li>

<li className={css.listItem}>
<span>Views</span>
<span>{stats.views}</span>
</li>

<li className={css.listItem}>
<span>Likes</span>
<span>{stats.likes}</span>
</li>
        </ul>
      </div>
    )}

   
    
   