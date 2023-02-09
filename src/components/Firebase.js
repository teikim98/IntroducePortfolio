import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGE_SENDING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//게시판 글 데이터 저장
export const saveData = async ({
  title,
  text,
  name,
  createdDate,
  boardId,
  time,
}) => {
  await setDoc(
    doc(db, "projectID", `${boardId}`),
    {
      time,
      title,
      text,
      name,
      createdDate,
      id: boardId,
    },
    { merge: true }
  );
};
//게시판 데이터 불러오기
export const fetchBoard = async () => {
  const BoardDB = await getDocs(collection(db, "projectID"));
  return BoardDB;
};
