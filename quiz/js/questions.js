// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "What is the total weight of four kegs of nails if each keg weighs 100 pounds?",
    answer: "400pounds",
    options: ["100pounds", "200pounds", "300pounds", "400pounds"],
  },
  {
    numb: 2,
    question:
      "A cutting wheel cuts through an inch of glass in 2 minutes. How long will it take to cut 6 inches deep?",
    answer: "12 minutes",
    options: ["10 minutes", "11 minutes", "12 minutes", "13 minutes"],
  },
  {
    numb: 3,
    question: "Which of the following numbers is the same as 6 1/4?",
    answer: "6.25",
    options: ["6.5", "6.14", "6.10", "6.25"],
  },
  {
    numb: 4,
    question: "Which of these four numbers is the largest?",
    answer: "1.1",
    options: ["0.9", "1.02", "0.6", "1.1"],
  },
  {
    numb: 5,
    question:
      "Find out the wrong number in the given sequence of numbers: 4, 6, 8, 9, 10, 11, 12",
    answer: "9",
    options: ["6", "9", "12", "11"],
  },

  {
    numb: 6,
    question:
      "Mary, who is sixteen years old, is four times as old as her brother. How old will Mary be when she is twice as old as her brother?",
    answer: "24",
    options: ["20", "22", "26", "24"],
  },
  {
    numb: 7,
    question:
      "Free notebooks were distributed equally among children of a class. The number of notebooks each child got was one-eighth of the number of children. Had the number of children been half, each child would have got 16 notebooks. Total how many notebooks were distributed ?",
    answer: "512",
    options: ["256", "512", "625", "430"],
  },
  {
    numb: 8,
    question:
      "Look at this series: 2, 1, (1/2), (1/4) ... What number should come next?",
    answer: "(1/8)",
    options: ["(1/3)", "(1/6)", "(2/5)", "(1/8)"],
  },
  {
    numb: 9,
    question:
      "At a conference, 12 members shook hands with each other before & after the meeting. How many total number of handshakes occurred?",
    answer: "132",
    options: ["152", "121", "132", "141"],
  },
  {
    numb: 10,
    question: "165135 is to Peace as 1215225 is to",
    answer: "9",
    options: ["love", "loop", "lead", "castle"],
  },
  {
    numb: 11,
    question:
      "A fisherman has 5 fishes (namely A, B, C,D, E) each having a different weight. A weighs twice as much as B. B weighs four and a half times as much as C. C weighs half as much as D. D weighs half as much as E.E weighs less than A but more than C. Which of the following is the lightest?",
    answer: "C",
    options: ["A", "B", "C", "D"],
  },
  {
    numb: 12,
    question:
      "The day before the day before yesterday is three days after Saturday. What day is it today?",
    answer: "Friday",
    options: ["Sunday", "Tuesday", "Friday", "Monday"],
  },
  {
    numb: 13,
    question: "Which means intricate?",
    answer: "Involved",
    options: ["Involved", "Brave", "Decorate", "Courage"],
  },
  {
    numb: 14,
    question: "A guarantee always has a ______",
    answer: "Pledge",
    options: ["Penalty", "Pledge", "Seal", "Signature"],
  },
  {
    numb: 15,
    question: " Which is a disease?",
    answer: "Influenza",
    options: ["Antitoxin", "Influenza", "Virus", "Bacteria"],
  },
  {
    numb: 16,
    question: "Which is prestige?",
    answer: "Distinction",
    options: ["Strong", "Equality", "Leveling", "Distinction"],
  },
  {
    numb: 17,
    question:
      "The ancient Egyptians did not have compasses therefore used what to align the four sides of the Pyramid?",
    answer: "Stars",
    options: ["Sun", "Moon", "Stars", "Gold"],
  },
  {
    numb: 18,
    question: "Who is the leader of the local government unit?",
    answer: "Mayor",
    options: ["President", "Judge", "Mayor", "Chief Of Police"],
  },
  {
    numb: 19,
    question:
      "Government collect this to have money to pay for services that the people needs",
    answer: "Taxes",
    options: ["Piggy banks", "Expenses", "Taxes", "Flowers"],
  },
  {
    numb: 20,
    question: "Scientists usually state the problem as a",
    answer: "Question",
    options: ["Solution", "Question", "Hypothesis", "Observation"],
  },
  {
    numb: 21,
    question:
      "Which area of science studies the earth's origin, history and structure?",
    answer: "Geology",
    options: ["Earthology", "Geology", "NatGeology", "Geography"],
  },
  {
    numb: 22,
    question: "How _____________ sales did you make today?",
    answer: "Many",
    options: ["Much", "Many", "Often", "More"],
  },
  {
    numb: 23,
    question: "Most of my co-workers have more experience __________________.",
    answer: "Than me",
    options: ["Than them", "Than me ", "Than i", "Than we"],
  },
  {
    numb: 24,
    question: "Would you like to have __________ pens?",
    answer: "Some",
    options: ["Some", "Same", "Another", "Newest"],
  },
  {
    numb: 25,
    question: "Janet ___________ until dark yesterday.",
    answer: "Worked",
    options: ["Did worked", "Works", "Will work", "Worked"],
  },
  {
    numb: 26,
    question: "He usually ______________ 100 calls each day.",
    answer: "Answers",
    options: ["Answers", "Answer", "Will answer", "Will answers"],
  },
  {
    numb: 27,
    question:
      "_____________ said that computers would solve all our problems was mistaken.",
    answer: "Whoever",
    options: ["Everyone", "Who", "Whoever", "Whatever"],
  },
  {
    numb: 28,
    question: "One of the cabinets ______________ open.",
    answer: "Is",
    options: ["Are", "Has", "Have", "Is"],
  },
  {
    numb: 29,
    question: "The supervisor and her employees __________at the job fair.",
    answer: "Were",
    options: ["Will go", "Were", "Went", "Is"],
  },
  {
    numb: 30,
    question:
      "The sum of Richard's age and Ruel's age is 37. Nine years ago, Richard was twice as old as Ruel then. How old is Ruel?",
    answer: "23",
    options: ["37", "28", "23", "42"],
  },
  {
    numb: 31,
    question: "I would be happy to help _________ I have an appointment.",
    answer: "Except",
    options: ["Except", "Accept", "Excepted", "Accepted"],
  },
  {
    numb: 32,
    question: "Choose the correctly spelled word",
    answer: "Absence",
    options: ["Abscents", "Absence", "Absense", "Abcence"],
  },
  {
    numb: 33,
    question: "Please choose the correctly spelled word",
    answer: "Research",
    options: ["Reasearch", "Research", "Reesearch", "Reaserch"],
  },
  {
    numb: 34,
    question: "Have you seen my notepad? ____________ in the conference room",
    answer: "It's",
    options: ["It's", "Its", "Is", "it"],
  },

  {
    numb: 35,
    question:
      "_______________ communication enables us to share your thoughts with others by using words in a mutually understanding.",
    answer: "Verbal",
    options: ["Verbal", "Non verbal", "Digital", "None"],
  },

  {
    numb: 36,
    question:
      "__________ is a  complete  mixture of gestures ,movement ,postures and tone of voice",
    answer: "Body language",
    options: ["Body language", "Feedback", "Traffic Sign", "None"],
  },

  {
    numb: 37,
    question:
      ". Which of the following is not a part of the communication cycle?",
    answer: "Discipline",
    options: ["Medium", "Discipline", "All Of the above", "Target"],
  },

  {
    numb: 38,
    question: "What is the purpose of communication? ",
    answer: "All of the above",
    options: [
      "Share thoughts(ideas and feelings)",
      "Influence(get someone to do something you want)",
      "Inform(tell someone about something)",
      "All of the above",
    ],
  },
  {
    numb: 39,
    question:
      "Which of the following method is used to receive information from the sender? ",
    answer: "Listening",
    options: ["Speaking", "Writing", "Nodding", "Listening"],
  },
  {
    numb: 40,
    question: "Choose the correct example of oral communication.",
    answer: "Face-to-face interaction ",
    options: ["None", "Report", "Newspaper", "Face-to-face interaction "],
  },
  {
    numb: 41,
    question: "Why do we send emails? ",
    answer: "Both (d) and (b) ",
    options: [
      "To talk to each other",
      "To communicate information",
      "Both (d) nd (b) ",
      "To share documents and files",
    ],
  },
  {
    numb: 42,
    question:
      "Smiling to show happiness is an example of __________________ communication.",
    answer: "Non-Verbal Communciation",
    options: [
      "Non-Verbal Communciation",
      "Verbal Communciation",
      "Graphical Communciation",
      "Digital Communciation",
    ],
  },
  {
    numb: 43,
    question: "How many ethnic groups do we have in Nigeria?",
    answer: "250 ethnic groups",
    options: [
      "250 ethnic groups",
      "36 ethnic groups",
      "150 ethnic groups",
      "54 ethnic groups",
    ],
  },
  {
    numb: 44,
    question: "Who is the current chairman of ECOWAS?",
    answer: "President Muhama don Issoufou of Niger Republic",
    options: [
      "Goodluck Jonathan",
      "President Bola Tinubu",
      "President Muhama don Issoufou of Niger Republic",
      "David Mark",
    ],
  },
  {
    numb: 45,
    question: "Which African country first gained independence?",
    answer: "Liberia",
    options: ["Ghana", "Nigeria", "South Africa", "Liberia"],
  },
  {
    numb: 46,
    question: "Who is Nigeria's Minister of Power?",
    answer: " Mr. Abubakar Aliyu",
    options: [
      "Peter Obi",
      " Mr. Abubakar Aliyu",
      " Mr. Abdullahi Aliyu",
      "None of the above",
    ],
  },
  {
    numb: 47,
    question: "What Blue in the Nigerian Police flag represents?",
    answer: "Love, loyalty, and unit",
    options: [
      "Love, loyalty, and unit",
      "Peace, Injustice, and Discrimination",
      "Security, Safty, and Stability",
      "None of the above",
    ],
  },
  {
    numb: 48,
    question: " Who created the Nigerian Council?",
    answer: "Frederick Lugard",
    options: [
      "Frederick Lugard",
      "Nnamdi Azikiwe",
      "Herbert Macaulay",
      "Godswill Obot Akpabio",
    ],
  },
  {
    numb: 49,
    question: " Who formed the first political party in Nigeria?",
    answer: "Herbert Macaulay",
    options: [
      "Frederick Lugard",
      "Nnamdi Azikiwe",
      "Herbert Macaulay",
      "Godswill Obot Akpabio",
    ],
  },
  {
    numb: 50,
    question: "How many Local Government Areas are in Nigeria?",
    answer: "774",
    options: ["774", "250", "36", "180"],
  },
];
