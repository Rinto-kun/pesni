import React from 'react';
import styles from './styles.module.css';

export function DownloadsButton({ pdf }) {
    return (
        <div className={styles.downloadsbutton}>
            <a href={pdf} target="_blank" className="button button--secondary button--lg">
                📄 Текст
            </a>
        </div>
    );
}
export function DownloadChordsButton({ pdf }) {
    return (
        <div className={styles.downloadsbutton}>
            <a href={pdf} target="_blank" className="button button--secondary button--lg">
                🎼 Акорди
            </a>
        </div>
    );
}

