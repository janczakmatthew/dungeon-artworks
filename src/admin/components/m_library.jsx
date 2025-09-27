import { useEffect, useState } from "react";
import { fetchMedia } from "../utils/supabaseQuery";

function MLibrary({ bucket="other", folder="" }) {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        async function loadMedia() {
            const media = await fetchMedia(bucket, folder);
            // console.log('Fetched media:', media);
            setFiles(media);
        }
        loadMedia();
    }, []);

    return (
        <div>
            {files.length === 0 && <p>No files found.</p>}
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-20">
                    
                    {files.map(file => (
                        <div key={file.name} className="shadow-lg border border-slate-900">
                            <img
                                src={file.url}
                                alt={file.name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover", // crops but keeps ratio
                                }}
                            />

                        </div>
                    ))}
                </div>
        </div>
    )
}

export default MLibrary;