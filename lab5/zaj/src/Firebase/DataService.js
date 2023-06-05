import { Timestamp, addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./init";

export const addTodo = async (user, content) =>{
  try {
    await addDoc(collection(firestore, 'todos'), {
      uid: user.uid,
      content: content,
      completed: false,
      created: Timestamp.now()
    });
  } catch (error) {
    console.error({error});
  }
}

export const getAllTodos = async (user) => {
  const q = query(collection(firestore, 'todos'),
  where('uid','===', user.uid));
  const todos = [];
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      todos.push(doc.data().content);
    });
  } catch (error) {
    console.error({error});
  }
  return todos;
}