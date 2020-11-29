const quest = [
    {
        "question":`Q. What is the output of the following code:-\n
        var1 = 1
        var2 = 2
        var3 = "3"
        print(var1 + var2 + var3)`,
        "options": [
            `6`,
            `33`,
            `123`,
            `Error. Mixing operators between numbers and strings are not supported`
        ],
        "answer": `Error. Mixing operators between numbers and strings are not supported`
    },

    {
        "question": "Q. 5 + 7 = ?",
        "options": [
            "10",
            "11",
            "12",
            "13"
        ],
        "answer": "12"
    },
    {
        "question": "Q. 12 - 8 = ?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "4"
    },
    {
        "question": "Q. What is the output of print(10 - 4 * 2)",
        "options": [
            "12",
            "2",
            "3",
            "4"
        ],
        "answer": "2"
    },
    {
        "question": `Q. What is the output of the following assignment operator:-\n
            y = 10
            x = y += 2
            print(x) `,
        "options": [
            "12",
            "2",
            "3",
            "SynatxError"
        ],
        "answer": "SynatxError"
    },
    {
        "question": `Q. What is the output of the following Python code:-\n
            x = 10
            y = 50
            if (x ** 2 > 100 and y < 100):
                print(x, y)`,
        "options": [
            "100 500",
            "10 50",
            "None",
            "SynatxError"
        ],
        "answer": "None"
    },
    {
        "question": `Q.What is the output of the following code:-\n
            x = 100
            y = 50
            print(x and y)`,
        "options": [
            "True",
            "False",
            "100",
            "50"
        ],
        "answer": "50"
    },
    {
        "question": `Q. What is the output of print(2 * 3 ** 3 * 4):-\n`,
        "options": [
            "216",
            "864",
            "1000",
            "500"
        ],
        "answer": "216"
    },
    {
        "question": `Q. What is the output of the following addition (+) operator:-\n
        a = [10, 20]
        b = a
        b += [30, 40]
        print(a)
        print(b)`,
        "options": [
            `[10, 20, 30]
            [100, 200, 300]`,
            `[10, 20]
             [10, 20, 30, 40]`,
            `SynatxError`,
            `None`
        ],
        "answer": `None`
    },
    {
        "question": `Q. What is the output of print(2%6):-\n
       `,
        "options": [
            `ValueError`,
            `0.33`,
            `2`,
            `None`
        ],
        "answer": `2`
    },
    {
        "question": `Q. Guess the correct output of the following code:-\n
        str1 = "PYnative"
        print(str1[1:4], str1[:5], str1[4:], str1[0:-1], str1[:-1])`,
        "options": [
            `PYn PYnat ive PYnativ vitanYP`,
            `Yna PYnat tive PYnativ vitanYP`,
            `Yna PYnat tive PYnativ PYnativ`,
            `None`
        ],
        "answer": `Yna PYnat tive PYnativ PYnativ`
    },
    {
        "question": `Q. What is the output of the following:-\n
        x = 36 / 4 * (3 +  2) * 4 + 2
        print(x)`,
        "options": [
            `182.0`,
            ` 37`,
            `117`,
            `The Program executed with errors`
        ],
        "answer": `182.0`
    }


]
module.exports = quest;