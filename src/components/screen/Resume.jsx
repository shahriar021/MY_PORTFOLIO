import React from 'react';
import useDownloader from 'react-use-downloader';

export default function Resume() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/Shahriar_chowdhury.pdf'; // Relative path to the file in the public directory
  const filename = 'shahriar.pdf'; // The name of the file to be saved

  return (
    <div className="Resume">
      <p>Download is {isInProgress ? 'in progress' : 'stopped'}</p>
      <button onClick={() => download(fileUrl, filename)}>
        Click to download the file
      </button>
      <button onClick={() => cancel()}>Cancel the download</button>
      <p>Download size in bytes: {size}</p>
      <label htmlFor="file">Downloading progress:</label>
      <progress id="file" value={percentage} max="100" />
      <p>Elapsed time in seconds: {elapsed}</p>
      {error && <p>Possible error: {JSON.stringify(error)}</p>}
    </div>
  );
}
