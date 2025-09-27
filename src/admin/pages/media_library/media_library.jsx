import TitleSection from "../../components/titlesection";
import MLibrary from "../../components/m_library";

function MediaLibrary() {
    return (
        <div className="Media Library">
            <TitleSection title="Media Library" subtitle="Manage your users here" />
            <div className="p-4">
                <MLibrary bucket='logos' />

            </div>
        </div>
    );
}

export default MediaLibrary;