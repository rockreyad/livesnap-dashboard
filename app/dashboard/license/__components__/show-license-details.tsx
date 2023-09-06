"use client";
import useSearchAction from "@/hooks/useSearchAction";

export default function ShowLicenseDetails() {
  const { searchResult: userInfo } = useSearchAction();

  console.log("userInfo", userInfo);

  if (!userInfo)
    return (
      <div className="p-2 bg-white rounded">
        <text className="text-xl text-black font-medium">License Details</text>
        <div className="flex flex-col">
          <div className="grid grid-flow-row">
            <div className="grid grid-cols-2">
              <div className="text-gray-500">Name</div>
              <div className="text-gray-500">-</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-gray-500">Email</div>
              <div className="text-gray-500">-</div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="p-2 bg-white rounded">
      <text className="text-xl text-black font-medium">License Details</text>
      <div className="flex flex-col">
        <div className="grid grid-flow-row">
          <div className="grid grid-cols-2">
            <div className="text-gray-500">Name</div>
            <div className="text-gray-500">{userInfo.Address}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-gray-500">Email</div>
            <div className="text-gray-500">{userInfo.FullName}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="text-gray-500">License</div>
            <div className="text-gray-500">{userInfo.License}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
