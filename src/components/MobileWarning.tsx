import { useEffect, useState } from 'react';
import './styles/MobileWarning.css';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isMobile || !isVisible) return null;

    return (
        <div className="mobile-warning-overlay">
            <div className="mobile-warning-content">
                <h3>⚠️ High Graphics Warning</h3>
                <p>
                    This portfolio features intensive 3D graphics and animations.
                    <br /><br />
                    For the best experience, please view on a <strong>Laptop or PC</strong>.
                </p>
                <button onClick={handleDismiss} className="warning-dismiss-btn">
                    Continue Anyway
                </button>
            </div>
        </div>
    );
};

export default MobileWarning;
