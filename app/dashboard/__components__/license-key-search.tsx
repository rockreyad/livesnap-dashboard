"use client";
import SearchActionbar from "@/components/search-action";
import useSearchAction from "@/hooks/useSearchAction";
import ShowLicenseDetails from "./show-license-details";
import SectionHeader from "@/components/section-title";
import { Toaster } from "react-hot-toast";

export default function LicenseKeySearchByUserEmail() {
  const { searchAction, searchResult } = useSearchAction();
  return (
    <div className="flex flex-col space-y-4">
        <Toaster />
      <aside className="w-full">
        <SectionHeader
          title="Search user license"
          secondaryText="get the user details by searching the user email"
        />
      </aside>
      <aside>
        <div className="flex flex-col space-y-6 w-full">
          <SearchActionbar
            onSearch={searchAction}
            placeholder="enter user email"
          />
          <ShowLicenseDetails userInfo={searchResult} />
        </div>
      </aside>
    </div>
  );
}
