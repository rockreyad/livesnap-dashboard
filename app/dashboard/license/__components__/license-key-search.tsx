"use client";
import SearchActionbar from "@/components/search-action";
import useSearchAction from "@/hooks/useSearchAction";

export default function LicenseKeySearchByUserEmail() {
  const { searchAction } = useSearchAction();
  return (
    <SearchActionbar onSearch={searchAction} placeholder="enter user email" />
  );
}
