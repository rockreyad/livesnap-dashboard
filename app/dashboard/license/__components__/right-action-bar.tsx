import SectionHeader from "@/components/section-title";
import ShowLicenseDetails from "./show-license-details";

export default function ShowUserLisence() {
  return (
    <aside>
      <div className="flex flex-col">
        <SectionHeader
          title="Show user license"
          secondaryText="the user details by searching the user email"
        />
        <ShowLicenseDetails />
      </div>
    </aside>
  );
}
