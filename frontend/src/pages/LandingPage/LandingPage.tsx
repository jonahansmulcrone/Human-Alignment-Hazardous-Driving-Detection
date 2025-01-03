import { Button } from "react-bootstrap";
import useSignOut from "../../hooks/useSignOut";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const { signOut } = useSignOut();
    const { user } = useAuth();

    const navigate = useNavigate();

    const handleBeginCalibration = () => {
        const permissions = window.confirm('The Human-Alignment Hazard Detection Survey would like to access your camera.')

        if (permissions) {
            navigate('/calibration');
        }
    }

    return (
        <div>
            <h1>
                Survey
            </h1>
            {user && (
                <h4>
                    Welcome, {user.email} to the HAHD Survey!
                </h4>
            )}
            <Button variant="primary" onClick={signOut} style={{ padding: '6px 45px 6px 45px', marginTop: '25px' }}>
                Log Out
            </Button>
            <Button variant="primary" onClick={handleBeginCalibration} style={{ padding: '6px 45px 6px 45px', marginTop: '25px' }}>
                Start Calibration
            </Button>
        </div>
    )
}

export default LandingPage;