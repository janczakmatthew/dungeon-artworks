import { useEffect, useState } from "react";

import { fetchMedia } from "../utils/supabaseQuery";
import DelayedLoading from "../utils/DelaySkeleton";

import Card from "../components/card"

function MLibrary({ bucket = "other", folder = "" }) {

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    const showLoading = DelayedLoading(loading, 1000);

    useEffect(() => {
        setLoading(true);

        async function loadMedia() {
            const media = await fetchMedia(bucket, folder);
            const filtered = (media || []).filter(
                file => file.name !== ".emptyFolderPlaceholder"
            );

            setFiles(filtered);
            setLoading(false);
        }

        loadMedia();
    }, [bucket, folder]);

    if (showLoading) {
        return (
            <div className="skeleton grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="card bg-slate-800 rounded-lg shadow-md overflow-hidden w-full mx-auto animate-pulse"
                    >
                        {/* Header skeleton */}
                        <div className="flex flex-row items-center border-b bg-slate-950 px-4 py-2">
                            <div className="h-6 w-6 bg-gray-700 rounded mr-2" />
                            <div className="h-5 w-32 bg-gray-700 rounded" />
                        </div>

                        {/* Image/content skeleton */}
                        <div className="px-4 py-2 space-y-2">
                            <div className="h-32 w-full bg-gray-700 rounded" />
                            <div className="h-4 bg-gray-700 rounded w-3/4" />
                            <div className="h-4 bg-gray-700 rounded w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            {console.log(files)}
            {files.length === 0 && <p>No files found.</p>}
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10">
                {files.map((file) => (
                    <Card
                        key={file.name}
                        title={file.name.length > 20 ? file.name.slice(0, 20) + "..." : file.name}
                        value={
                            <img
                                src={file.url}
                                alt={file.name}
                                className="w-full h-32 object-cover rounded"
                            />
                        }
                        card_container_classes="h-full"
                    />
                ))}
            </div>
        </div>
    )
}

export default MLibrary;