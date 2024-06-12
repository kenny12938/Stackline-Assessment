
import { useSelector } from 'react-redux';
import '../App.css';
import {
  selectTitle,
  selectImage,
  selectSubTitle,
  selectTags
} from '../redux/itemSlice';

export const SideBar = () => {
    const title = useSelector(selectTitle);
    const image = useSelector(selectImage);
    const subTitle = useSelector(selectSubTitle);
    const tags = useSelector(selectTags);
  
    return (
        <div className="sidebar-main">
            <img className="sidebar-image" src={image} />
            <div className="sidebar-title">{title}</div>
            <div className="sidebar-subtitle">{subTitle}</div>
            <div className="sidebar-tag-section">
                {
                    tags.map((tag: string) => <div className="sidebar-tag-block">
                        {tag}
                    </div>)
                }
            </div>
        </div>
    );
};