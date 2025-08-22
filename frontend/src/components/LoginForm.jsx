
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const cognitoLoginUrl = "https://ap-southeast-27sclhywav.auth.ap-southeast-2.amazoncognito.com/login?client_id=2eg3s02qpctiaaso349t4c8t3l&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard";

  const handleLogin = () => {
    window.location.href = cognitoLoginUrl;
  };

  const handleRegister = () => {
    window.location.href = cognitoLoginUrl;
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #513351, #974597)',
      }}
    >
      <div className="text-center" style={{ maxWidth: 400, width: '100%' }}>
        <h2 className="fw-bold mb-5" style={{ color: '#fff' }}>WELCOME</h2>
        <button
          type="button"
          className="btn btn-lg mb-3"
          style={{
            borderRadius: '18px',
            backgroundColor: "#F0EDFF",
            color: "#513351",
            fontWeight: 'bold',
            width: '100%',
            boxShadow: '0 4px 12px rgba(81,51,81,0.2)',
          }}
          onClick={handleLogin}
        >
          Log In
        </button>
        <button
          type="button"
          className="btn btn-lg"
          style={{
            borderRadius: '18px',
            backgroundColor: "#513351",
            color: "#fff",
            fontWeight: 'bold',
            width: '100%',
            boxShadow: '0 4px 12px rgba(81,51,81,0.2)',
            marginBottom: '48px'
          }}
          onClick={handleRegister}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginForm;