import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { firestore } from "../config/firebase/firebase";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { updateUserGeneral } from "../Redux/Store/auth-slice";
import { useState } from "react";
function useUpdateDoc(collName, docId) {
  const dispatch = useDispatch();
  const [value, loading, error] = useDocument(doc(firestore, collName, docId));

  const updateDocument = async (data) => {
    if (value.exists) {
      const ref = await updateDoc(doc(firestore, collName, docId), data);
      console.log(ref);
      console.log("afterrrr", value.data());
    }
  };

  useEffect(() => {
    if (!!value) {
      dispatch(
        updateUserGeneral({ updatedUser: { _id: value.id, ...value.data() } })
      );
    }
  }, [value]);

  return { val: value?.data(), update: updateDocument };
}

export default useUpdateDoc;
