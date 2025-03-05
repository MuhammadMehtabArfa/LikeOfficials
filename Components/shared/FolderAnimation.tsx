const FolderAnimation = () => {
    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer' }}
            className="items-center"
        >
            <defs>
                <filter id="shadowFiles" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2" />
                </filter>
                <filter id="shadowFolder" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
                </filter>
            </defs>

            <style>
                {`
                #files {
                    transform: translateY(50px);
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                #folderBack, #folderFront {
                    transition: transform 0.3s ease-out;
                }
                #file1, #file2, #file3 {
                    transform-origin: center;
                    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                svg:hover #files {
                    transform: translateY(0);
                    opacity: 1;
                }
                svg:hover #file1 {
                    transform: translate(-20px, -40px) rotate(-15deg);
                    transition-delay: 0.1s;
                }
                svg:hover #file2 {
                    transform: translateY(-50px);
                    transition-delay: 0.15s;
                }
                svg:hover #file3 {
                    transform: translate(20px, -40px) rotate(15deg);
                    transition-delay: 0.2s;
                }
                `}
            </style>

            <path
                id="folderBack"
                d="M40 65C40 60.5817 43.5817 57 48 57H85C89.4183 57 93 60.5817 93 65V70H152C156.418 70 160 73.5817 160 78V145C160 149.418 156.418 153 152 153H48C43.5817 153 40 149.418 40 145V65Z"
                fill="#38BDF8"
                filter="url(#shadowFolder)"
            />

            <g id="files">
                <rect
                    id="file1"
                    x="60"
                    y="50"
                    width="60"
                    height="80"
                    rx="4"
                    fill="white"
                    filter="url(#shadowFiles)"
                />
                <rect
                    id="file2"
                    x="70"
                    y="50"
                    width="60"
                    height="80"
                    rx="4"
                    fill="#E5E7EB"
                    filter="url(#shadowFiles)"
                />
                <rect
                    id="file3"
                    x="80"
                    y="50"
                    width="60"
                    height="80"
                    rx="4"
                    fill="#9CA3AF"
                    filter="url(#shadowFiles)"
                />
            </g>

            <path
                id="folderFront"
                d="M40 100C40 95.5817 43.5817 92 48 92H152C156.418 92 160 95.5817 160 100V155C160 159.418 156.418 163 152 163H48C43.5817 163 40 159.418 40 155V100Z"
                fill="#7DD3FC"
                filter="url(#shadowFolder)"
            />
        </svg>
    );
};

export default FolderAnimation;
