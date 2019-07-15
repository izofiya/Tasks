// 1. Добавить в конструктор Article:
// Подсчёт общего количества созданных объектов. 
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.
// Пусть вызов Article.showStats() выводит то и другое.
// Использование:
// function Article() {
//  this.created = new Date();
//  // ... your code goes here ...
// }

Article.countObjects = 0;

function Article() {
    this.created = new Date();
  
    Article.countObjects++;
    Article.final = this.created;
  };
  
  Article.showStats = function() {
    console.log( 'Всего: ' + this.countObjects + ', Последняя: ' + this.final );
  };
  
  new Article();
  new Article();
  Article.showStats();
  
  new Article();
  Article.showStats();
  
//   2.   Есть следующий код:
   class Test {
	['value1'] = []
	['value2'] = 'wow'
    }

    console.log((new Test).value1);

    // 3. Что выведет консоль? Нужно заменить на let

    for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000);
    }

// 4. Создайте функцию, которая позволяет решить следующую задачу: на основании полученного массива чисел вернуть новый массив в котором все положительные числа и ноль сохранили свою позицию, а отрицательные отсортированы по возрастанию (от меньшего к большему).
// Пример: resultFunction([23, -22, -1, 16, 99, -47, 0, -3]) // вернёт массив [23, -47, -22, 16, 99, -3, 0, -1]
// Напишите реализацию resultFunction.

  //   function resultFunction(arr) {
  //     let newArr = [];
  //     arr.map(el => {
  //       if (el < 0) {
  //         arr.sort(function(a, b) {
  //           if (a < b) {
  //             return a - b;
  //             }
  //       });
  //       newArr.push(el);
  //       }
  //       if(el >= 0 ) {
  //         newArr.push(el);
  //       }
  //     });
  //   return newArr;
  // };

    function resultFunction(arr) {
      arr.sort(function(a, b) {
        if (a >= 0 ) {
          return 1;
        }
        if (a < b && a < 0) {
          return a - b;
          }
    });
    return arr;
  }
  console.log(resultFunction([23, -22, -1, 16, 99, -47, 0, -3]));

  
    // 5. Напишите код, который при клике на любой div внутри root будет выводить в консоль его id:
    let divRoot = document.getElementById("root");
    divRoot.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log(event.target.id);
    });