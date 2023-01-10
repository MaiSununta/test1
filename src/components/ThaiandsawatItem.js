import './ThaiandsawatItem.css';

function ThaiandsawatItem(props) {
    const { thaiandsawat, onThaiandsawatClick } = props;
    return (
     <div className="thaiandsawat-item">
        <img src={thaiandsawat.thumbnailUrl} onClick={() => {onThaiandsawatClick(thaiandsawat)}} />
        <h4>{thaiandsawat.title}</h4> 
     </div>
    );
}

export default ThaiandsawatItem;