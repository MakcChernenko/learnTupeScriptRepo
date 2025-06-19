// this is 1 task
export const makeDelay = (ms: number): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("successful"), ms);
  });
};

// this is 2 task
const isSuccess: boolean = true;

interface User {
  name: string;
  age: number;
}
export const getUser = (isSuccess: boolean): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve({ name: "Maks", age: 20 });
      } else {
        reject("Не вдалося отримати користувача");
      }
    }, 1000);
  });
};

// this is 3 task
export const promise = (): Promise<number> => {
  return new Promise<number>((resolve) => {
    resolve(5);
  });
};

// this is 4 task
const getData1 = (): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Дані 1");
    }, 1000);
  });
};
const getData2 = (): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Дані 2");
    }, 2000);
  });
};
const getData3 = (): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Дані 3");
    }, 3000);
  });
};
export const promiseAll = (): Promise<string[]> => {
  return Promise.all([getData1(), getData2(), getData3()]);
};
// this is 5 task
interface Product {
  id: number;
  name: string;
}

const fetchProduct = (productId: number): Promise<Product> => {
  return new Promise<Product>((resolve, reject) => {
    if (productId === 1) {
      resolve({ id: 1, name: "Milk" });
    } else {
      reject("Товар не знайдено");
    }
  });
};

export const showProduct = async (productId: number): Promise<void> => {
  try {
    const product = await fetchProduct(productId);
    console.log("Товар знайдено:", product);
  } catch (error) {
    console.error("Помилка:", error);
  }
};
