import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDuzjJx1efaTCht05sOb6TnbIXj82B5QcM",
  authDomain: "selfintroboard.firebaseapp.com",
  databaseURL: "https://selfintroboard-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "selfintroboard",
  storageBucket: "selfintroboard.appspot.com",
  messagingSenderId: "709717846139",
  appId: "1:709717846139:web:94e6f9bb774dfb38761ade",
  measurementId: "G-22X1BKD5YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//게시판 글 데이터 저장
export const saveData = async ({ title, text, name, createdDate, boardId, time }) => {
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
