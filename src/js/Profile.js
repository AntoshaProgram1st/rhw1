export const Profile = ({ username, tag, location, avatar, stats, id }) => {
  return (
    <div className="profile">
      <div className="description" >
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name description__item">{username}</p>
        <p className="tag description__item">@{tag}</p>
        <p className="location description__item">{location}</p>
      </div>

      <ul className="stats" >
        <li className="stats__item">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stats__item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stats__item">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

