import React from 'react'
import html2canvas from 'html2canvas';

function DownloadDiv() {
    const handleDownload = () => {
        const element = document.getElementById('downloadable-div');

        html2canvas(element).then((canvas) => {
            const dataURL = canvas.toDataURL('image/png');

            // Create a temporary download link
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'downloaded-div.png';
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Remove the temporary link from the DOM
            document.body.removeChild(link);
        });
    }

    return (
        <div>
            <div id="downloadable-div">
                {/* Content of the div you want to download */}
                <h1>This is the content</h1>
            </div>
            <button onClick={handleDownload}>Download as PNG</button>
        </div>
    );
}

export default DownloadDiv