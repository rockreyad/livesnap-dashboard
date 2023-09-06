import { use, useCallback, useState } from "react";
import { db } from "@/utils/firebaseConfig";
import { onValue, ref } from "firebase/database";

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

  const pushSearcResult = useCallback((result: UserData | null) => {
    setSearchResult(result);
  }, []);

  const searchAction = (searchValue: string) => {
    console.log("Please perform a search action", searchValue);
    try {
      const licenseKeyRef = ref(db, "Users");
      return onValue(licenseKeyRef, (snapshot) => {
        const firebaseRealtimeData: UserDataCollection = snapshot.val();
        const result = findObjectByEmail(searchValue, firebaseRealtimeData);
        pushSearcResult(result);
      });
    } catch (error) {
      console.error(error);
    }
  };

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
