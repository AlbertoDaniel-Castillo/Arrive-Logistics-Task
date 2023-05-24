import { Fragment, useEffect, useState } from "react";
import "./App.css";
import MessagesTable from "./components/MessagesTable";
import WsFunc from "./components/WsFunc";
import Header from "./components/Header";

const WEBSOCKET_URL = "wss://tso-take-home-chat-room.herokuapp.com";

function App() {
  const [objectMessages, setObjectMessages] = useState([]);

  const { val: message } = WsFunc(WEBSOCKET_URL);

  useEffect(() => {
    if (message) {
      let totalMessages = objectMessages;
      let messageSplitted = message.split(":");
      let numberofWords = messageSplitted[1].trim().split(/\s+/).length;
      let indexOfElement = -1;

      if (objectMessages.length !== 0) {
        indexOfElement = objectMessages.findIndex(
          (e) => e.name === messageSplitted[0]
        );
      }

      if (indexOfElement > -1) {
        totalMessages[indexOfElement].numOfWords += numberofWords;
      } else {
        totalMessages.push({
          name: messageSplitted[0],
          numOfWords: numberofWords,
        });
      }
      setObjectMessages(totalMessages);
    }
  }, [message]);

  return (
    <Fragment>
      <Header />
      <div className="main">
        <div className="table">
          {objectMessages.length !== 0 && (
            <MessagesTable objectMessages={JSON.stringify(objectMessages)} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
