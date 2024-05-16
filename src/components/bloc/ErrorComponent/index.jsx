import './index.scss';

const ErrorComponent = ({ message = 'Session expiré' }) => {
  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>{message}</h1>
      </div>
    </main>
  );
};

export default ErrorComponent;
