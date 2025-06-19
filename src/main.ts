import "./style.css";
import { makeDelay, getUser, promise, promiseAll, showProduct } from "./task-1";
// task 1
makeDelay(2000).then(() => console.log("Пройшло 2 секунди"));

// task 2
const isSuccess: boolean = true;
getUser(isSuccess)
  .then((user) => console.log("Отримано користувача:", user))
  .catch((error) => console.error("Помилка:", error));
// task 2 чомусь проміси без таймера виводяться у консоль а з ним ні
promise()
  .then((resolve) => {
    return (resolve += 10);
  })
  .then((resolve) => {
    return (resolve *= 2);
  })
  .then((resolve) => console.log(resolve));

// task 4
promiseAll().then((response) => console.log(response));

// task 5
showProduct(1);
