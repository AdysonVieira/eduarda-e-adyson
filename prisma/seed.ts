import { PrismaClient } from "@prisma/client";

const prismaClient: PrismaClient = new PrismaClient()

const wedding = {
  bride: "Eduarda",
  brideMother: "Maria Lindalva",
  brideFather: 'Enaldo Duarte',
  groom: "Adyson",
  groomMother: "Maria de Fátima",
  groomFather: "José Augusto",
  day: 23,
  month: "novembro",
  year: 2024,
  city: "Olho d'Água das Flores",
  address: "Paróquia de Santo Antônio de Pádua",
  reception: "Celebrar Festas e Eventos",
  mapsUrl: ""
}

const gifts = [
  {
    name: "Conjunto de taças de vinho",
    price: 150.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/jogo-de-tacas-para-vinho-cristal-450ml-6-pecas-haus-sense-bohemia/magazineluiza/142270100/4442e16578477f142ee70d7b7807546f.jpg"
  },
  {
    name: "Assadeira de cerâmica",
    price: 120.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/assadeira-retangular-em-ceramica-branca-29x19x6cm-dolce-home/megamixferraz/36311p/4fa98758b43c873dd00e3546dcc4c440.jpeg"
  },
  {
    name: "Jogo de talheres de prata",
    price: 300.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/jogo-de-talheres-silver-16-pecas-jogo-de-talheres-completo-com-detalhes-elegantes-vintage-com-toque-de-luxo-prime-home-decor/leclassicdecor/33138p/0f46e517e1b99ea5247a43da5e84366e.jpeg"
  },
  {
    name: "Aparelho de sopa",
    price: 250.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/aparelho-de-sopa-5-pecas-em-porcelana-branco-oxford/atacadovencedoronline/115491/6740851e908cdbca2127a932a31d906a.jpeg"
  },
  {
    name: "Conjunto de lençóis de algodão",
    price: 350.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/kit-de-edredom-jogo-de-lencol-6-pcs-100-algodao-casal-queen-soft/casaluan/6afdf04acb0c11ecbd4a4201ac18506b/537a464cc85b32530862ccdacf40cdaa.jpeg"
  },
  {
    name: "Conjunto de xícaras de café",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/conjunto-6-xicaras-de-cafe-com-pires-em-porcelana-90ml-hauskraft/kasm/30001461br/a3d7cdb2d6341de4aaef555d5acb98c7.jpeg"
  },
  {
    name: "Sanduicheira antiaderente",
    price: 200.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x800/sanduicheira-arno-compacta-com-placa-antiaderente-sacb/magazineluiza/217384200/5c4d9e03589646ecaf13c9ff39ce94ad.jpg"
  },
  {
    name: "Espagueteira",
    price: 250.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/kit-espagueteira-pegador-de-macarrao-gourmet-mix/atacadogourmet2/kitespagueteira/5567a8f7828993f2de2fad3248fc5ec7.jpeg"
  },
  {
    name: "Conjunto de panelas antiaderentes",
    price: 500.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/jogo-de-panelas-tramontina-solar-aco-inox-fundo-triplo-inducao-6-pecas/mgshopgra/601589/d5d221a43a0e07c41733df2444749224.jpeg"
  },
  {
    name: "Guarda-roupas de casal 3 portas",
    price: 1970.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/guarda-roupa-casal-com-espelho-3-portas-de-correr-6-gavetas-demobile-londres/magazineluiza/237139700/3b7bbe154e080575f1a7f693c555751a.jpg"
  },
  {
    name: "Microondas ",
    price: 696.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/micro-ondas-electrolux-23l-prata-efficient-me23s/magazineluiza/235613500/b8e72d7db5f51e4ccc9ec954d3824116.jpg"
  },
  {
    name: "Grill elétrico",
    price: 350.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/mini-grill-eletrico-oster-inox-2-em-1/oster/15696/4d09bc8af65e5537ae5fd9f070f83954.jpeg"
  },
  {
    name: "Panela de Pressão",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/panela-de-pressao-brinox-42l-preta-ceramic-life-pressure/magazineluiza/237310000/fab6a36bcc9a4ee13f8d87acbbe37e34.jpg"
  },
  {
    name: "Panela elétrica de arroz",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/panela-de-arroz-eletrica-5-xicaras-philco-ph5p/magazineluiza/238193900/746093928c9c05dbc39358e075c424a7.jpg"
  },
  {
    name: "Jogo de toalhas de banho e rosto",
    price: 200.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/kit-com-04-toalhas-de-banho-gigante-banhao-quasar-vinho-azul-bege-marrom-75x150cm-lmpeter/marbelytoalhas/581p/de5936565182c1d9da1049c67c974cfd.jpeg"
  },
  {
    name: "Espremedor de frutas elétrico",
    price: 150.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/espremedor-de-frutas-mondial-turbo-premium-e-10-eletrico-inox-250w-capacidade-1l/magazineluiza/021803800/b074bd0f592e0ebef8b2e0372d06898a.jpg"
  },
  {
    name: "Máquina lava e seca",
    price: 4200.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/lava-e-seca-midea-11kg-smart-wi-fi-healthguard-14-programas-titanium-mf200d110wb/magazineluiza/234659200/fec315d4176df894c6945eac5e5db323.jpg"
  },
  {
    name: "Máquina de lavar louças",
    price: 3200.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/lava-loucas-10-servicos-brastemp-cor-inox-com-ciclo-pesado-blf10br/whirlpool/326020168/8e5611adb3299eaf1be20c15688aee4f.jpeg"
  },
  {
    name: "Cafeteira",
    price: 480.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/cafeteira-nescafe-dolce-gusto-mini-me-preta-automatica-110v-nescafe-dolce-gusto/nescafedolcegustooficial/57494976321fb14b8a56a98c28e3e784/e9baed8d52364e0c66eaca02042c8095.jpeg"
  },
  {
    name: "Aparelho de fondue",
    price: 250.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/aparelho-de-fondue-de-inox-brinox-10-pecas/magazineluiza/237309100/590cdcbc9c046c3e03d2860864608eaf.jpg"
  },
  {
    name: "Almofadas decorativas",
    price: 120.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/kit-4-almofadas-decorativas-45x45-terracota-kombigode/kombigode/567423/364e59f23b5f009fa21596d5fa5669a4.jpeg"
  },
  {
    name: "Conjunto de pratos e tigelas de porcelana",
    price: 350.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/kit-conjunto-6-pratos-fundos-porcelana-oxford-ryo-maresia-225cm/amarinnehome2/15668362845/d5ec746b0bd582d898412c9a9ef28ab6.jpeg"
  },
  {
    name: "Mini forno elétrico",
    price: 150.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/forno-eletrico-de-mesa-chef-mini-com-9-litros-de-capacidade-grill-preto-ft9-220v-black-decker/vgshop/142412020/40d6bb2e17c1af82bc455a1ee6d4dad2.jpeg"
  },
  {
    name: "Kit frigideiras",
    price: 130.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/conjunto-de-frigideiras-antiaderente-tramontina-de-aluminio-caribe-preto-3-pecas/magazineluiza/237959400/e8e1217de8e1ae1b1f4994c6c3b73212.jpg"
  },
  {
    name: "Luminária moderna",
    price: 200.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/luminaria-de-chao-tripe-celta-com-cupula-abajur-off-white-nature-jlar-moveis/jlarmoveis/lcoff/2684bbcc8228698859a5433437029bbc.jpg"
  },
  {
    name: "Secador de cabelo profissional",
    price: 300.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/secador-de-cabelo-taiff-elegance-new-tourmaline-preto-2100w-2-velocidades/magazineluiza/228883600/8c7c18dc6b89ec553c7f09032c1096e6.jpg"
  },
  {
    name: "Bomboniere em cristal",
    price: 150.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/bomboniere-potiche-cristal-louise-35201-wolff/redeced-vilavelha/16888/8a090507d7cd518ea30227d1e25011d8.jpeg"
  },
  {
    name: "Conjunto de copos para coquetéis",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/jogo-de-tacas-e-copos-para-coqueteis-e-drinks-nadir-figueredo/webbarltda/11534305237/7edb78d9e3755d9d30cbf9c93a43308c.jpeg"
  },
  {
    name: "Forno de embutir moderno",
    price: 1500.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/forno-eletrico-de-embutir-electrolux-de-conveccao-com-dourador-80l-preto-oe8eh/magazineluiza/233124900/b29d9ac98281876cf122845900df6bd5.jpg"
  },
  {
    name: "Conjunto chá e café inox",
    price: 300.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/conjunto-cha-cafe-inox-lyr-6-pecas-bandeja-bules-mesa-servir-acucareiro-mesa-kit-completo-aco-inoxidavel-forma-utilidades/e-wcomercioeletronico/8011986/45754c418c2f5b6ce282afd35c664be0.jpeg"
  },
  {
    name: "Máquina de fazer pão",
    price: 610.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/panificadora-mondial-master-bread-preta-700w-220v-npf-53-71625-02/continentalcenter/371840010022000011/63cd8fa5d59b63f6651c5599ad518d52.jpeg"
  },
  {
    name: "Difusor de óleos essenciais",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/umificador-de-ar-ultrassonico-usb-7-cores-de-led-com-filtros-difusor-de-oleos-essenciais-ambiente-prime/magaprimer/55fc7872ad6211eda3864201ac185019/f8e92025493181d1caab0676c9017384.jpeg"
  },
  {
    name: "Roupas de cama de seda",
    price: 300.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/kit-roupa-de-cama-king-com-elastico-seda-cetim-4-pecas-charme-do-lar/charmedolar/lkc4p93/0ee4713350bbf2cde7d6793d74893004.jpeg"
  },
  {
    name: "Conjunto de utensílios de cozinha em silicone",
    price: 190.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/conjunto-de-utensilios-inox-tramontina-utilita-10-pecas/magazineluiza/238298800/00a41b699332b5e8da514f2e9cc215ff.jpg"
  },
  {
    name: "Ferro de passar roupa a vapor",
    price: 200.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/ferro-de-passar-roupa-a-vapor-philco-nano-ceramic-pfv3100az-preto-e-azul/magazineluiza/021948800/28e3d71055744991836e8e2f4ce9c602.jpg"
  },
  {
    name: "Bolsa térmica para bebidas",
    price: 120.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/bolsa-termica-36-litros-grande-viagem-praia-garrafas-c-alca-cinza-arn/aaronshop/04404cin/4215a5b54e651d6aba329b355faefdd5.jpeg"
  },
  {
    name: "Mini processador de alimentos",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/multiprocessador-britania-multifuncoes-5-em-1-1300w-bmp2000/britania/23149/b03941337e1943cea5eeb97155cd8c21.jpeg"
  },
  {
    name: "Jogo de pratos de vidro temperado",
    price: 250.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/jogo-6-pratos-rasos-de-vidro-temperado-preto-moderno-borda-detalhada-harena-27cm-lyor/laspane/2778a10069/c33f615da930a1af7eaf11a035ffa9bc.jpeg"
  },
  {
    name: "Cesto organizador de banheiro",
    price: 100.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/cesto-organizador-astra-sem-tampa-12l/deparcocasaconstrucao/0cd2205a86ef11ed849f4201ac185019/f5bc974e39aeb67c3dd8d840ae9ad9bf.jpeg"
  },
  {
    name: "lixeiro inox",
    price: 180.0,
    imgUrl: "https://a-static.mlcdn.com.br/800x560/lixeira-aco-inox-de-8-litros-com-cesto-removivel-healer/devintex/32391/719f8a99e7d7831197c484b64e25b41a.jpeg"
  },
];

const createWedding = async (wedding: any) => {
  const create = await prismaClient.wedding.create({
    data: wedding
  })
}

const createGifts = async (gifts: Array<any>) => {
  const create = await prismaClient.gift.createMany({
    data: gifts
  })
}

const main = async () => {
  await createWedding(wedding)
  await createGifts(gifts)
}

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso")
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prismaClient.$disconnect()
  })