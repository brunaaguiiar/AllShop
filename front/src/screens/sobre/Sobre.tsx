export default function Sobre() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <section className="w-full bg-gradient-to-r from-orange-500 to-orange-400 py-20 px-6">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-6">Sobre a AllShop</h1>
          <p className="text-xl max-w-3xl leading-relaxed text-orange-50">
            A AllShop é uma plataforma de e-commerce desenvolvida para conectar
            clientes e fornecedores em um ambiente moderno, seguro e intuitivo.
            Nosso foco é oferecer praticidade na compra e excelência na
            experiência digital.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Quem somos
            </h2>
            <p className="text-gray-600 leading-8 mb-5">
              A AllShop nasceu com o objetivo de modernizar a forma como as
              pessoas compram produtos online.
            </p>
            <p className="text-gray-600 leading-8">
              Nossa plataforma foi construída para entregar velocidade,
              segurança e acessibilidade, permitindo que clientes encontrem os
              melhores produtos de tecnologia em um só lugar.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-10 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Nossos diferenciais
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>• Plataforma rápida e intuitiva</p>
              <p>• Interface moderna e responsiva</p>
              <p>• Segurança na navegação</p>
              <p>• Produtos selecionados com qualidade</p>
              <p>• Acessibilidade para todos</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">+100</h2>
            <p className="text-gray-500">Produtos cadastrados</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">+500</h2>
            <p className="text-gray-500">Pedidos realizados</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">98%</h2>
            <p className="text-gray-500">Satisfação dos clientes</p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white border border-gray-200 shadow-lg rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Fornecedor Parceiro
          </h2>
          <p className="text-gray-600 leading-8">
            Trabalhamos com um fornecedor parceiro responsável por garantir a
            qualidade, procedência e disponibilidade dos produtos vendidos em
            nossa plataforma. Isso permite manter um alto padrão de confiança e
            eficiência nas entregas.
          </p>
        </div>
      </section>
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        © 2026 AllShop — Todos os direitos reservados
      </footer>
    </div>
  )
}