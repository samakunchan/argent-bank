import './index.scss';
import {
  selectInfosUser,
  selectUserIsConnected,
} from '../../../core/features/profile/profile-selector';
import DashboardContentComponent from '../../../components/bloc/DashboardContentComponent';
import DashboardHeaderComponent from '../../../components/bloc/DashboardHeaderComponent';
import ErrorComponent from '../../../components/bloc/ErrorComponent';
import LoadingComponent from '../../../components/bloc/LoadingComponent';
import { selectAuthInProccess } from '../../../core/features/auth/auth-selector';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const user = useSelector(selectInfosUser);
  const isConnected = useSelector(selectUserIsConnected);
  const authInProcess = useSelector(selectAuthInProccess);

  return (
    <>
      {isConnected ? (
        <main className='main bg-dark'>
          <DashboardHeaderComponent user={user} />
          <DashboardContentComponent />
        </main>
      ) : (
        <>{authInProcess ? <LoadingComponent /> : <ErrorComponent />}</>
      )}
    </>
  );
};

export default DashboardPage;
