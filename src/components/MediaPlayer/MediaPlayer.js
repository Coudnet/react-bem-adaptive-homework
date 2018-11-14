import React from 'react';
import './MediaPlayer.scss'

const MediaPlayer = (props) => {
    return (
        <div className="card-content-control-player">
            <div className="track-info">
                <div className="track-info-icon"><img src={props.data.albumcover} alt=""/></div>
                <div className="track-info-content">
                    <div className="track-info-content-artist">
                        <div className="track-artist-name">{props.data.artist}</div>
                        <span className="track-info-content-artist-separator">-</span>
                        <div className="track-name">{props.data.track.name}</div>
                    </div>
                    <div className="track-progress">
                        <div className="track-progress-line">
                            <div className="track-progress-slider"></div>
                        </div>
                        <div className="track-length">{props.data.track.length}</div>
                    </div>
                </div>
            </div>
            <div className="player-control">
                <div className="player-control-remotes">
                    <div className="remote-left"></div>
                    <div className="remote-right"></div>
                </div>
                <div className="player-control-volume">
                    <div className="volume-line">
                        <div className="volume-slider"></div>
                    </div>
                    <div className="volume-value">{props.data.volume}%</div>
                </div>
            </div>
        </div>
    );
};

export default MediaPlayer;