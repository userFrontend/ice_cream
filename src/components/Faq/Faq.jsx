import { useState, useRef } from "react";
import "./FAQ.scss";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        className={`faq-answer ${open ? "open" : ""}`}
        style={
          open
            ? { height: contentRef.current.scrollHeight }
            : { height: 0 }
        }
      >
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const data = [
    {
      question: "Montway qanday ishlaydi?",
      answer: "Foydalanuvchi zip code kiritadi va unga mos narx yoki xizmatlar chiqadi.",
    },
    {
      question: "Admin panel orqali nimalarni boshqarish mumkin?",
      answer: "Admin sahifalarni yoqib/o‘chirishi, matnlarni o‘zgartirishi va xizmatlar qo‘shishi mumkin.",
    },
    {
      question: "Sayt mobil versiyada ishlaydimi?",
      answer: "Ha, sayt to‘liq responsive – ya’ni telefon va planshetlarda ham yaxshi ishlaydi.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Tez-tez so'raladigan savollar</h2>
      {data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
