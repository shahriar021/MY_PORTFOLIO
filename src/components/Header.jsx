import React from "react";
import { Link } from "react-router-dom";
import useDownloader from 'react-use-downloader';
import '../App.css';

const Header = () => {
    const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/Shahriar_chowdhury.pdf'; // Relative path to the file in the public directory
  const filename = 'shahriar.pdf'; // The name of the file to be saved
  return (
    <div className="headerStyle">
      <div className="nameTxt">Shahriar Chowdhury</div>
      <div className="headerStyle2">
        <Link to="/about" className="headerTxt">About</Link>
        <Link to="/projects" className="headerTxt">Projects</Link>
        <Link to="/contact" className="headerTxt">Contact</Link>
        <button onClick={() => download(fileUrl, filename)} className="headerTxt">Download Resume</button>
      </div>
    </div>
  );
};

export default Header;
