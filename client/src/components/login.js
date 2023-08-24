import { GoogleLogin } from "react-google-login";

const clientId =
  "67353516029-1totgl65qohmqq2mr6um36l0j0d7fj7d.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success! Current User : ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Login Failed! res : ", res);
  };
  return (
    <>
      {" "}
      <div id="signinButton">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </>
  );
}

export default Login;
