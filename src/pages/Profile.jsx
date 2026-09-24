import { Navigate, useNavigate } from "react-router-dom";
import { getUser, signOut } from "../utils/auth";

function Profile() {
  const navigate = useNavigate();
  const user = getUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  function handleSignOut() {
    signOut();
    navigate("/", { replace: true });
  }

  return (
    <section className="profile-page">
      <div className="profile-header">
        <span className="profile-eyebrow">YOUR TASTY BITES PROFILE</span>
        <div className="profile-avatar" aria-hidden="true">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h1>{user.name}</h1>
        <p>Welcome back. Your next delicious order is just a few clicks away.</p>
      </div>

      <div className="profile-details">
        <div className="profile-detail">
          <span>EMAIL ADDRESS</span>
          <strong>{user.email}</strong>
        </div>
        <div className="profile-detail">
          <span>PHONE NUMBER</span>
          <strong>{user.phone}</strong>
        </div>
        <div className="profile-detail">
          <span>DATE OF BIRTH</span>
          <strong>{user.dateOfBirth}</strong>
        </div>
        <div className="profile-detail">
          <span>LOCATION</span>
          <strong>{user.location}</strong>
        </div>
      </div>

      <div className="profile-actions">
        <button type="button" onClick={() => navigate("/menu")}>
          Browse menu <span aria-hidden="true">→</span>
        </button>
        <button type="button" className="profile-signout" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </section>
  );
}

export default Profile;