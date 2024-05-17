import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserForm } from '../../../core/features/profile/profile-selector';
import { toogleUserForm } from '../../../core/features/profile/profile-slice';

const ModalComponent = ({ title, children }) => {
  const dispatch = useDispatch();
  const isUserFormActive = useSelector(selectUserForm);

  const openModal = () => {
    dispatch(toogleUserForm(!isUserFormActive));
  };

  const closeModal = () => {
    dispatch(toogleUserForm(false));
  };

  return (
    <div>
      <button onClick={openModal} className='edit-button'>
        Edit Name
      </button>
      {isUserFormActive && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
