import TitleSection  from "../../components/titlesection";
import Tabs from "../../components/tabs"

import AnalyticsTab from "./tabs/AnalyticsTab";
import PaymentsTab from "./tabs/PaymentsTab";
import SiteInfoTab from "./tabs/SiteInfoTab";

function Settings() {

   const tabs = [
    {
      label: "Site Info",
      content: <SiteInfoTab />,
    },
    {
      label: "Analytics",
      content: <AnalyticsTab />,
    },
    {
      label: "Payments",
      content: <PaymentsTab />,
    },
    
  ];

  return (
    <div className="settings">
      <TitleSection title="Settings" subtitle="Manage your settings here" />
      <div className="p-4">
        <Tabs tabs={tabs} defaultIndex={0} />
      </div>
    </div>
  );
}

export default Settings;