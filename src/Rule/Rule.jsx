import React, { useState } from 'react';
import RuleItem from './RuleItem';
import "./rule.css";

function Rule () {
  const [faqs, setfaqs] = useState([
    {
      question: 'Что по качеству?',
      answer: 'Мы не делаем то, чего сами бы не носили.',
      open: true
    },
    {
      question: 'Сколько доставка идет?',
      answer: 'По России, СНГ и Европе 7 - 21 день без учета выходных, праздников и форс-мажорных обстоятельств. По Украине 1 - 2 дня, потому что слава.',
      open: false
    },
    {
      question: 'Доставка и оплата',
      answer: 'Оплатить свой заказ вы можете в разделе «Корзина», выбрав соответствующий товар. Оплата осуществляется банковскими картами Visa или MasterСard. После покупки товара идет проверка и оформление вашего заказа администрацией и в течение 48 часов ваш заказ будет обработан со статусом "Заказ принят". Отправка заказов осуществляется в течение 1 - 3 рабочих дней после принятия их администратором',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="rules">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <RuleItem faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Rule;
