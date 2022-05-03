import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import classes from '@/components/ui/SocialMediaTab.module.scss';

export default function SocialMediaTab() {
  return (
    <div className={classes.socialMedia}>
      <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
      <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
      <FontAwesomeIcon icon={faYoutube} className={classes.icon} />
    </div>
  );
}
