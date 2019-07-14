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

    // 5. Напишите код, который при клике на любой div внутри root будет выводить в консоль его id:
    let divRoot = document.getElementById("root");
    divRoot.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log(event.target.id);
    });
