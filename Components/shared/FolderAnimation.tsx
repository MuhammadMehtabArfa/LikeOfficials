const FolderAnimation = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 200"
            className="w-full  h-auto"
        >
            <style>
                {`
                    .folder { cursor: pointer; }
                    .folder-back { fill: #2196F3; }
                    .folder-front { fill: #1976D2; }
                    .folder-tab { fill: #42A5F5; }
                    .file1, .file2, .file3 { opacity: 0; transform: translate(0, 0); }
                    .file1 { fill: #FFFFFF; stroke: #E0E0E0; stroke-width: 1; }
                    .file2 { fill: #E0E0E0; stroke: #BDBDBD; stroke-width: 1; }
                    .file3 { fill: #000000; stroke: #212121; stroke-width: 1; }

                    /* Animation */
                    @keyframes file1Animation {
                        0% { opacity: 0; transform: translate(0, 0); }
                        100% { opacity: 1; transform: translate(0, -55px); }
                    }
                    @keyframes file2Animation {
                        0% { opacity: 0; transform: translate(0, 0); }
                        100% { opacity: 1; transform: translate(0, -75px); }
                    }
                    @keyframes file3Animation {
                        0% { opacity: 0; transform: translate(0, 0); }
                        100% { opacity: 1; transform: translate(0, -95px); }
                    }

                    /* Hover states */
                    .folder-group:hover .file1 {
                        animation: file1Animation 0.6s 0.1s linear forwards;
                    }
                    .folder-group:hover .file2 {
                        animation: file2Animation 0.6s 0.2s linear forwards;
                    }
                    .folder-group:hover .file3 {
                        animation: file3Animation 0.6s 0.3s linear forwards;
                    }
                `}
            </style>

            <g className="folder-group hover:shadow-2xl">
                <path className="folder-back" d="M40,70 L40,160 L200,160 L200,70 Z" />
                <path className="folder-tab" d="M40,70 L90,70 L100,60 L150,60 L150,70 L200,70 L200,80 L40,80 Z" />
                
                {/* Files behind the front panel */}
                <g className="file1">
                    <rect x="0" y="0" width="50" height="75" rx="2" transform="translate(60, 120)" />
                </g>
                <g className="file2">
                    <rect x="0" y="0" width="50" height="55" rx="2" transform="translate(90, 120)" />
                </g>
                <g className="file3">
                    <rect x="0" y="0" width="50" height="55" rx="2" transform="translate(120, 120)" />
                </g>

                {/* Front part stays in place */}
                <path className="folder-front" d="M40,80 L200,80 L200,160 L40,160 Z" />
            </g>
        </svg>
    );
};

export default FolderAnimation;
