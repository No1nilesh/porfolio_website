/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

function Notification({ notification, setnotification }) {
  const { message, msgType } = notification;

  const notRef = useRef(null);
  const paraRef = useRef(null);

  const handleClose = () => {
    setnotification({ message: "", msgType: "", getmsg: false });
  };

  useEffect(() => {
    switch (msgType) {
      case "success":
        notRef.current.style.background = "green";
        paraRef.current.style.color = "green";
        break;
      case "error":
        notRef.current.style.background = "red";
        paraRef.current.style.color = "red";
        break;
      default:
        notRef.current.style.background = "green";
        paraRef.current.style.color = "green";
        break;
    }
  }, [msgType]);

  return (
    <div className="fixed top-2 right-2 md:w-fit rounded-md z-50 pl-[2px] bg-slate-300">
      <div
        ref={notRef}
        className="w-full h-full rounded-md absolute top-0 left-0 scale-x-0 notification"
      ></div>
      <span
        onClick={handleClose}
        className="absolute text-black font-semibold text-xl right-1 top-0 p-1 cursor-pointer z-50"
      >
        <FontAwesomeIcon icon={faTimes} size="xs" />
      </span>
      <div className="bg-white w-full h-full rounded-md flex px-4 items-center py-4 relative z-40 mt-1">
        <span>{msgType === "success" ? "✔️" : "❌"}</span>
        <p ref={paraRef} className="text-md ml-2">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Notification;
