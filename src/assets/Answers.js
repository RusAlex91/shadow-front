export default [{
        id: 1,
        type: "html",
        admin_Invalidated: true,
        question: "Что такое Doctype? Для чего он нужен?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
   tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
   suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
   lacus vel facilisis.`,
        code: `!DOCTYPE html>
   <br />
   meta charset="UTF-8">`,
        seen: false
    },
    {
        id: 2,
        admin_Invalidated: false,
        type: "html",
        question: "Для чего используется data- атрибуты?",
        answer: `Позволяет сохранять информацию в DOM, можно писать валидный HTML с встроенным в него приватным атрибутом`,
        code: ``,
        links: {
            1: {
                title: "Doctype",
                link: "https://www.w3.org/QA/Tips/Doctype"
            },
            2: {
                title: "MDN",
                link: "https://developer.mozilla.org/en-US/docs/Glossary/Doctype"
            }
        },
        extra: "ох, это доп инфо!",
        seen: false
    }
]