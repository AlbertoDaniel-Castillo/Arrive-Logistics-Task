import { useEffect, useRef, useState } from "react";

const WsFunc = (socketUrl) => {
  const [val, setVal] = useState(null);
  const ws = useRef(null);
  useEffect(() => {
    const socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      console.log("opened");
    };

    socket.onclose = () => {
      console.log("closed");
    };

    socket.onmessage = (event) => {
      //   console.log("got message", event.data);
      setVal(event.data);
      //   handleMessage(event.data);
    };

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  return { val };
};

export default WsFunc;
