
import './App.css'

import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

import  Profile  from "./Profile";
import  FriendList  from "./FriendList";

import TransactionHistory from "./TransactionHistory";



function App() {
  

  return (
    <>



     <Profile
     name={userData.username}
     tag={userData.tag}
     location={userData.location}
     image={userData.avatar}
     stats={userData.stats}
     />



<div>
      
      <FriendList friends={friends} />
    </div>





<div>
      <TransactionHistory items={transactions} />
    </div>


</>

 )
}

export default App


    
   
 