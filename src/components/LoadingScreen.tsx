import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LoadingAnimation from '../assets/loading.lottie';
import styles from './loadingScreen.module.css';

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <DotLottieReact
        src={LoadingAnimation}
        loop
        autoplay
        className={styles.loadingScreenIcon}
      />
    </div>
  );
};

export default LoadingScreen;
