/*
  Напишите фукцкию подсчета количества лет оставшихся до пенсии.
  Как аргумент фунцуия принимает пенсионный возраст страны и
  как результат получаем функцию которая по году рождения вычисляет
  количество лет оставшихся до пенсии.
*/

function retirement(retirementAge) {
  const currDate = new Date().getFullYear();
  return (yearOfBirth) => {
    if (yearOfBirth > currDate) {
      throw new Error('Please, enter valid year!');
    }
    return retirementAge - (currDate - yearOfBirth);
  };
}

export default retirement;
