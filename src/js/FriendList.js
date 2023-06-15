export const FriendList = ({ friends }) => {
  return (
    <ul className="friend__list">
      {friends.map(item => (
        <li className="friend__item" id={item.id}>
          <span
            className="friend__status"
            style={{
              backgroundColor: item.isOnline ? 'green' : 'red',
              width: 15,
              height: 15,
              borderRadius: '50%',
              display: 'inline-block',
            }}
          ></span>
          <img
            className="friend__avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="friend__name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};