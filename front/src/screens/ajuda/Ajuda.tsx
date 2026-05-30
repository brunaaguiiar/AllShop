import { Accordion, AccordionItem } from "@heroui/react";
import { IoChevronDown } from "react-icons/io5";

export default function Ajuda() {
  const perguntas = [
    {
      titulo: "Qual o prazo de entrega?",
      resposta:
        "O prazo de entrega varia de acordo com a sua localização e o método de envio escolhido. Em geral, entregamos em todo o Brasil em até 7 dias úteis.",
    },
    {
      titulo: "Posso trocar ou devolver um produto?",
      resposta:
        "Sim, você tem até 15 dias para solicitar troca ou devolução sem custo.",
    },
    {
      titulo: "Quais formas de pagamento são aceitas?",
      resposta:
        "Aceitamos Pix com 5% de desconto, cartôes de crédito (em até 12x sem juros) e boleto bancário",
    },
    {
      titulo: "Como posso acompanhar meu pedido?",
      resposta:
        "Acesse 'Meus pedidos' no menu superior. Lá você poderá visualizar o status do seu pedido e o código de rastreamento para acompanhar a entrega.",
    },
    {
      titulo: "Os produtos têm garantia?",
      resposta:
        "Todos os produtos vendidos pela AllShop possuem garantia de 90 dias contra defeitos de fabricação. Para acionar a garantia, entre em contato com nosso suporte pelo email ajuda@allshop.com.",
    },
    {
      titulo: "Como falar com o suporte?",
      resposta:
        "Você pode entrar em contato com nosso time de suporte pelo email ajuda@allshop.com.",
    },
  ];

  return (
    <section className="flex flex-col items-center px-6">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Como podemos ajudar?
        </h2>
        <p className="text-gray-500">
          Encontre respostas para as dúvidas mais comuns.
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <Accordion
          showDivider={false}
          selectionMode="multiple"
          className="gap-4 flex flex-col w-full"
          itemClasses={{
            base: "border border-orange-200 !rounded-2xl bg-white shadow-sm",
            trigger: "px-6 py-4 flex items-center justify-between w-full cursor-pointer",
            title: "font-semibold text-gray-800 text-left", 
            indicator:
              "text-orange-500 transition-transform duration-300 data-[open=true]:-rotate-180",
            content: "px-6 pb-6 text-gray-600",
          }}
        >
          {perguntas.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.titulo}
              indicator={<IoChevronDown size={22} />}
            >
              {item.resposta}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mt-8 w-full max-w-3xl p-8 bg-orange-100 border border-orange-500 rounded-3xl text-center">
        <p className="font-semibold text-gray-800">
          Não encontrou o que procurava?
        </p>
        <p className="text-sm text-gray-600">
          Fale com nosso time em{" "}
          <a href="mailto:ajuda@allshop.com" className="text-orange-500 font-medium">
            ajuda@allshop.com
          </a>
        </p>
      </div>
    </section>
  );
}
