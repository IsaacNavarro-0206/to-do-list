import { useEffect, useState } from "react";

// const todoList = [
//   { text: "Hacer la tarea de inglés", completed: true },
//   { text: "Comer", completed: true },
//   { text: "Tomar el curso de react", completed: false },
//   { text: "Tomar el curso de redux", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(todoList));
// localStorage.removeItem("TODOS_V1");

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }, 2500);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { saveItem, item, loading, error };
}
