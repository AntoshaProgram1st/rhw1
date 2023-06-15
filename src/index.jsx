import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Profile } from 'js/Profile';
import user from 'path/to/user.json';

import { Statistics } from 'js/Statistics';
import data from 'path/to/data.json';

import { FriendList } from 'js/FriendList';
import friends from 'path/to/friends.json';

import { TransactionHistory } from 'js/TransactionHistory';
import transactions from 'path/to/transactions.json';

const App = () => {
  return (
    <React.StrictMode>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
