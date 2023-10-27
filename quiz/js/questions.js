// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Have you seen my notepad? ____________ in the conference room.",
    answer: "It's",
    options: ["Oracle Database", "It's", "MySQL", "SQL+"],
  },
  {
    numb: 2,
    question: "Whats is SQL?",
    answer: "mysqli",
    options: ["mysqli", "MySQL", "mysql", "mysqly"],
  },
  {
    numb: 3,
    question: "Whats is SQL?",
    answer: "extension=php_mysqli.dll",
    options: [
      "extension=mysql.dll",
      "extension=php_mysqli.dll",
      "extension=php_mysqli.dl",
      "extension=mysqli.dl",
    ],
  },
  {
    numb: 4,
    question: "Whats is SQL?",
    answer: "PHP 5.3",
    options: ["PHP 5.3", "PHP 5.0", "PHP 5.1", "PHP 5.2"],
  },
  {
    numb: 5,
    question: "Whats is SQL?",
    answer: "CREATE TABLE table_name (column_name column_type);",
    options: [
      "CREATE table_name (column_type column_name);",
      "CREATE table_name (column_name column_type);",
      "CREATE TABLE table_name (column_type column_name);",
      "CREATE TABLE table_name (column_name column_type);",
    ],
  },
  // puede descomentar los códigos a continuación y duplicarlos tanto como desee agregar una pregunta
  // pero recuerde que debe dar el valor adormecido serializar como 1,2,3,5,6,7,8,9.....

  {
    numb: 6,
    question: "Whats is SQL?",
    answer: "La respuesta correcta de la pregunta está aquí.",
    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  },
];
