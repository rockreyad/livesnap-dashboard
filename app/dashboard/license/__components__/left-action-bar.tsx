import SearchActionbar from "@/components/search-action";
import SectionHeader from "@/components/section-title";
import LicenseKeySearchByUserEmail from "./license-key-search";

export default function LicenseSearch() {
  return (
    <aside className="w-1/3">
      <div className="flex flex-col">
        <SectionHeader
          title="Search user license"
          secondaryText="get the user details by searching the user email"
        />
        <LicenseKeySearchByUserEmail />
      </div>
    </aside>
  );
}
