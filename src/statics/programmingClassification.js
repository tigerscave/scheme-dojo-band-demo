const schemeClassification = {
  name: "Scheme",
  levels: [
    {
      level: 1,
      exam: "Scheme lv.1(cp.1-3)",
      description: "You can understand what recursion is."
    },
    {
      level: 2,
      exam: "Scheme lv.2(cp.4)",
      description: "You can write some function using number."
    },
    {
      level: 3,
      exam: "Scheme lv.3(cp.5-6)",
      description: "You can understand star function and shadows"
    },
    {
      level: 4,
      exam: "Scheme lv.4(cp.7)",
      description: "You can understand friends and relations"
    },
    {
      level: 5,
      exam: "Scheme lv.5(cp.8)",
      description: "You can understand how to use lambda function."
    },
    {
      level: 6,
      exam: "Scheme lv.6(cp.9)",
      description: "You can introduce how to write Y-combinator."
    },
    {
      level: 7,
      exam: "Scheme lv.7(cp.10)",
      description: "You can understand how to write Scheme interpreter"
    },
    {
      level: 8,
      description: "not yet"
    },
    {
      level: 9,
      description: "not yet"
    },
    {
      level: 10,
      description: "not yet"
    }
  ]
};

const htmlClassification = {
  name: "HTML",
  levels: [
    {
      level: 1,
      exam: "HTML lv.1",
      description: "From CodeAcademy Introduction to HTML"
    },
    {
      level: 2,
      exam: "HTML lv.2",
      description: "You can make your profile website",
      requirements: "CSS lv.2"
    },
    {
      level: 3,
      exam: "HTML lv.3",
      description: "You can make intractive profile website",
      requirement: "JavaScript"
    },
    {
      level: 4,
      description: "",
      requirement: ""
    },
    {
      level: 5,
      description: "",
      requirement: ""
    }
  ]
};

const cssClassification = {
  name: "CSS",
  levels: [
    {
      level: 1,
      exam: "CSS lv.1",
      description: "From CodeAcademy Learn CSS cp.1-2"
    },
    {
      level: 2,
      exam: "CSS lv.2",
      description: "From CodeAcademy Learn CSS cp.3-5"
    },
    {
      level: 3,
      exam: "CSS lv.3",
      description: "From CodeAcademy Learn CSS cp.6"
    },
    {
      level: 4,
      description: "Pass CSS exam lv.4"
    },
    {
      level: 5,
      description: "Pass CSS exam lv.5"
    }
  ]
};

const javaScriptClassification = {
  name: "JavaScript",
  levels: [
    {
      level: 1,
      exam: "JS lv.1",
      description: "From CodeAcademy Introduction to JS cp.1 - 3"
    },
    {
      level: 2,
      exam: "JS lv.2",
      description: "From CodeAcademy Introduction to JS cp.4 - 8"
    },
    {
      level: 3,
      description: "You can understand how to"
    },
    {
      level: 4,
      description: "Pass JS exam lv.4"
    },
    {
      level: 5,
      description: "Pass JS exam lv.5"
    }
  ]
};

const gitClassification = {
  name: "Git",
  levels: [
    {
      level: 1,
      description: "Pass Git exam lv.1"
    },
    {
      level: 2,
      description: "Pass JS exam lv.2"
    },
    {
      level: 3,
      description: "Pass JS exam lv.3"
    },
    {
      level: 4,
      description: "Pass JS exam lv.4"
    },
    {
      level: 5,
      description: "Pass JS exam lv.5"
    }
  ]
};

export default [
  schemeClassification,
  htmlClassification,
  cssClassification,
  javaScriptClassification,
  gitClassification
];
