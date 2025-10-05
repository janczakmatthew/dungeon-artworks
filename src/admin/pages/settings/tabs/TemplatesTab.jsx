import { useEffect, useState } from "react";
import { withMinimumDelay } from "../../../utils/supabaseQuery";
import Table from "../../../components/table";
import { templates } from "../../../utils/templates";

function TemplatesTab() {

    const [templateData, setTemplateData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTemplates() {
            setLoading(true);

            const data = await withMinimumDelay(
                Promise.resolve(
                    templates.map((t, index) => ({
                        id: index + 1,
                        name: t.name,
                        type: t.type,
                        compnentName: t.component.name
                    }))
                ), 10
            );

            setTemplateData(data);
            setLoading(false);
        }
        getTemplates();
    }, []);

    const handleEdit = (template) => {
        console.log("Edit", template);
        // later: open modal or edit file info
    };

    const handlePreview = (template) => {
        console.log("Preview", template);
        // you could open a modal showing <TemplateComponent preview />
    };

    const handleSetDefault = (template) => {
        console.log("Set Default", template);
        // store default template name in Supabase (site_settings table)
    };

    const columns = [
        {
            header: "Name",
            key: "name",
        },
        {
            header: "Type",
            key: "type",
        },
        {
            header: "Component",
            key: "componentName",
        },
        {
            header: "Actions",
            render: (_, row) => (
                <div className="space-x-2">
                    <button
                        onClick={() => handlePreview(row)}
                        className="bg-green-600 px-2 py-1 rounded text-sm"
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => handleEdit(row)}
                        className="bg-blue-600 px-2 py-1 rounded text-sm"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleSetDefault(row)}
                        className="bg-yellow-600 px-2 py-1 rounded text-sm"
                    >
                        Set Default
                    </button>
                </div>
            ),
        },
    ];


    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Templates</h2>
            <Table columns={columns} data={templateData} loading={loading} />
        </div>
    );
}

export default TemplatesTab;
