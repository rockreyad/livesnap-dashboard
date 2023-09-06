import LicenseSearch from "./__components__/left-action-bar";
import ShowUserLisence from "./__components__/right-action-bar";

export default function LicensePage() {
  return (
    <div className="flex space-x-2">
      <LicenseSearch />
      <ShowUserLisence />
    </div>
  );
}
