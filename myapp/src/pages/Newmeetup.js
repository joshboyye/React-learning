import { useHistory } from "react-router-dom/cjs/react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

const history =useHistory();
    
  function addMeetupData(meetupData) {
    fetch(
      "https://react-getting-started-4a994-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=>{
        history.replace('/')
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupData} />
    </section>
  );
}

export default NewMeetupPage;
