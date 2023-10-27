import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';


// eslint-disable-next-line react/prop-types
function Notification({ notification, setnotification }) {

    const noti = notification


    const notRef = useRef(null);
    const paraRef = useRef(null);

    const handleClose = () => {
        setnotification({ message: "", msgTpye: "", getmsg: false })
    }

    useEffect(() => {
        switch (noti.msgTpye) {
            case 'success':
                notRef.current.style.background = "green";
                paraRef.current.style.color = "green";
                break;
            case 'error':
                notRef.current.style.background = "red";
                paraRef.current.style.color = "red";
                break;

            default: 'success'
                notRef.current.style.background = "green";
                paraRef.current.style.color = "green";
                break;
        }

    }, [noti.msgTpye])


    return (
        <div className='fixed top-2 right-2 md:w-fit rounded-md z-[9999] pl-[2px] bg-slate-300 '>
        <div ref={notRef} className= 'w-full h-full rounded-md absolute z-[9996] scale-x-0 notification'></div>
            <span onClick={handleClose} className='absolute text-black font-semibold text-xl right-1 top-0 p-1 cursor-pointer z-[9998]'><FontAwesomeIcon icon={faX} size='xs' /></span>
            <div className='bg-white w-full h-full rounded-md flex px-4 items-center py-4 relative z-[9997] mt-1'> <span> {noti.msgTpye === 'success' ? "✔️" : "❌"}</span> <p ref={paraRef} className='text-md' >{noti.message}</p> </div>
        </div>
    )
}

export default Notification