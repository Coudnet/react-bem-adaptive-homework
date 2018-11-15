import React from 'react';
import './MediaPlayer.scss';
import {cn} from '@bem-react/classname';

const cnMediaPlayerControl = cn('MediaPlayerControl');

const MediaPlayer = (props) => {
    return (
        <div className={cnMediaPlayerControl()}>
            <div className={cnMediaPlayerControl('MediaDescription')}>
                <div className={cnMediaPlayerControl('Icon')}><img src={props.data.albumcover} alt="Обложка альбома"/></div>
                <div className={cnMediaPlayerControl('Description')}>
                    <div className={cnMediaPlayerControl('ArtistInfo')}>
                        <div className={cnMediaPlayerControl('ArtistName')}>{props.data.artist}</div>
                        <span className={cnMediaPlayerControl('TrackHelperSeparator')}>-</span>
                        <div className={cnMediaPlayerControl('TrackName')}>{props.data.track.name}</div>
                    </div>
                    <div className={cnMediaPlayerControl('TrackProgress')}>
                        <div className={cnMediaPlayerControl('TrackProgressLine')}>
                            <div className={cnMediaPlayerControl('TrackProgressSlider')}></div>
                        </div>
                        <div className={cnMediaPlayerControl('TrackLength')}>{props.data.track.length}</div>
                    </div>
                </div>
            </div>
            <div className={cnMediaPlayerControl('TrackControls')}>
                <div className={cnMediaPlayerControl('RemoteButtons')}>
                    <div className={cnMediaPlayerControl('RemoteButtonsLeft')}></div>
                    <div className={cnMediaPlayerControl('RemoteButtonsRight')}></div>
                </div>
                <div className={cnMediaPlayerControl('VolumeControl')}>
                    <div className={cnMediaPlayerControl('VolumeControlLine')}>
                        <div className={cnMediaPlayerControl('VolumeControlSlider')}></div>
                    </div>
                    <div className={cnMediaPlayerControl('VolumeValue')}>{props.data.volume}%</div>
                </div>
            </div>
        </div>
    );
};

export default MediaPlayer;