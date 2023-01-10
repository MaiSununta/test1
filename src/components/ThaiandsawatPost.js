import './ThaiandsawatPost.css';

function ThaiandsawatPost (props) {
    const { thaiandsawat, onBgClick } = props;
    return (
        <div className="thaiandsawat-post">
            <div className="thaiandsawat-post-bg" onClick={onBgClick} />
            <div className="thaiandsawat-post-content">
                <img src={thaiandsawat.fullUrl} />
                <h4>{thaiandsawat.title}</h4>
            </div>
        </div>
    );
}

export default ThaiandsawatPost;