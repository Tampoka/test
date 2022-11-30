import s from './SettingsPanel.module.scss'
import HomeImg from '../../assets/home.svg'
import SettingsImg from '../../assets/settings.svg'
import CommentImg from '../../assets/comment.svg'

export const SettingsPanel = () => {
    return (
        <div className={s.wrapper}>
            <img src={HomeImg} alt="" width={48} height={48}/>
            <img src={CommentImg} alt="" width={48} height={48}/>
            <img src={SettingsImg} alt="" width={48} height={48}/>
        </div>
    );
};

