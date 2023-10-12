/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Button from './UIComponents/Button';
import Slider from './UIComponents/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Modal({ setModalState, setModalData, ModalData }) {
    const data = ModalData;

    const onClose = () => {
        setModalState(false);
        setModalData("")
        console.log("close")
    }

 
    

    return (
        <div className='h-screen w-screen  fixed inset-0 z-50 modal_bg grid place-content-center'>
            <FontAwesomeIcon onClick={onClose} icon={faX} size='xl' className='absolute right-4 top-2 cursor-pointer' />
            <div className='modal max-w-4xl  card-glass px-4 py-6 rounded-xl flex flex-col gap-2 items-center'>
                <h1 className='text-xl font-bold text-center text-white'>{data.name}</h1>
                <div className='slider flex overflow-x-hidden rounded-md max-w-2xl drop-shadow-xl relative z-10'>
                    <Slider data={data} />
                    <div className='absolute right-1 top-1 z-20'>
                        <Link to={data.github_link}><Button /></Link>
                    </div>
                </div>
                <p className='px-4'>{data.project_details}</p>
            </div>
        </div>
    )
}

export default Modal