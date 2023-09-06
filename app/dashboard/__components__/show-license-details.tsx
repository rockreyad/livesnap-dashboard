"use client";
import { UserData } from "@/hooks/useSearchAction";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";

export default function ShowLicenseDetails({
  userInfo,
}: {
  userInfo: UserData | null | undefined;
}) {
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
            <div className="text-gray-500 flex justify-between items-center">
              {userInfo.License}
              <ClipboardIcon
                onClick={() =>
                  //copy to clipboard
                  navigator.clipboard
                    .writeText(userInfo.License)
                    .then(() => toast.success("Copied to clipboard"))
                }
                className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
