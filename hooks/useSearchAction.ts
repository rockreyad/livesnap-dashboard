import { use, useCallback, useState } from "react";
import { db } from "@/utils/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { toast } from "react-hot-toast";

export interface UserData {
  Address: string;
  DeviceId: string;
  DeviceName: string;
  FullName: string;
  License: string;
  LoginDeviceId: string;
  Phone: string;
  Photo: string;
  Plan: string;
  UserId: string;
  Verify: string;
  email: string;
}

interface UserDataCollection {
  [userId: string]: UserData;
}

const useSearchAction = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<UserData | null>();

  const searchAction = useCallback((searchValue: string) => {
    try {
      const licenseKeyRef = ref(db, "Users");
      return onValue(licenseKeyRef, (snapshot) => {
        const firebaseRealtimeData: UserDataCollection = snapshot.val();
        const result = findObjectByEmail(searchValue, firebaseRealtimeData);
        setSearchResult(result);
        if (result) {
          toast.success("One License Found");
        } else {
          toast.error("No License Found");
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { searchAction, searchValue, setSearchValue, searchResult };
};

export default useSearchAction;

function findObjectByEmail(
  email: string,
  data: UserDataCollection
): UserData | null {
  for (const userId in data) {
    if (data[userId].email === email) {
      return data[userId];
    }
  }
  return null;
}
