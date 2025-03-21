// LOCAL ONDE SERÁ ARMAZENADO OS DADOS DOS CASOS
import crime from '../assets/img/crime-scene.jpg';

export const cases = [
    {
        id: 1,
        title: 'O Mistério do Relógio Quebrado',
        image: `${crime}`,
        suspects: [
            "Carlos Almeida: O patriarca da família, conhecido por ser meticuloso e protetor com a coleção.",
            "Isabel Almeida: A esposa de Carlos, que adora organizar festas na mansão.",
            "Pedro Almeida: O filho mais novo, estudante de engenharia, que recentemente teve uma discussão com o pai sobre o futuro da coleção.",
            "Ana: A governanta da casa, que tem acesso a todas as áreas da mansão.",
            "Rafael: Um amigo da família que estava visitando na noite anterior."
        ],
        info: [
            "1. A sala dos relógios estava trancada, mas a chave foi encontrada em cima de uma mesa no hall de entrada.",
            "2. O relógio quebrado estava no chão, próximo à janela, que estava levemente aberta.", 
            "3. Um pedaço de tecido azul foi encontrado preso na fechadura da janela.",
            "4. Na noite anterior, houve uma pequena festa na mansão, e todos os personagens estavam presentes.",
            "5. Pedro foi visto saindo da sala dos relógios por volta das 22h, mas ele afirma que só estava verificando se a porta estava trancada.",
            "6. Rafael mencionou que viu Ana perto da sala dos relógios por volta das 23h, mas Ana nega ter estado lá.",
            "7. Carlos insiste que a coleção é muito importante para ele e que nunca deixaria a chave da sala em um local tão óbvio.",
        ],
        weapon: "",
        description: "Na mansão da família Almeida, uma valiosa coleção de relógios antigos é mantida em uma sala especial. Na manhã de 18 de março de 2025, o relógio mais valioso da coleção, um raro relógio de bolso do século XIX, foi encontrado quebrado no chão da sala. A família suspeita que alguém entrou na sala durante a noite e danificou o relógio intencionalmente.",
        guilty: "Rafael",
        motivation: "Ele estava usando uma camisa azul, o que explica o pedaço de tecido encontrado na fechadura. Ele provavelmente pegou a chave, entrou na sala para ver o relógio, mas algo deu errado (talvez ele tenha sido surpreendido por alguém) e, ao tentar sair pela janela, quebrou o relógio acidentalmente. Ele então deixou a chave em um local óbvio para evitar suspeitas."
    },
    {
        id: 2,
        title: "O Assassinato na Galeria de Arte",
        image: `${crime}`,
        suspects: [
            "Victor Mendes: O curador da galeria, conhecido por seu temperamento difícil e por ter inimizades no mundo da arte.",
            "Clara Mendes: Esposa de Victor, que estava na galeria na noite do crime. Ela é uma artista plástica e tinha uma relação conturbada com o marido.",
            "Ricardo Alves: Um colecionador de arte rico e influente, que estava interessado na pintura desaparecida. Ele e Victor tiveram uma discussão acalorada durante o evento.",
            "Mariana Costa: A assistente de Victor, que o ajudava a organizar a exposição. Ela parecia nervosa durante a noite.",
            "Leonardo Souza: Um segurança da galeria, responsável por monitorar as câmeras e controlar o acesso à sala reservada."
        ],
        info: [
            "1. O corpo de Victor foi encontrado com um ferimento na cabeça, causado por um objeto contundente. Havia sangue na estátua de bronze próxima ao corpo.",
            "2. A pintura desaparecida foi retirada da parede com cuidado, sem danos ao quadro ou ao local onde estava exposta.",
            "As câmeras de segurança foram desativadas por 15 minutos durante a noite, exatamente no horário estimado do crime.",
            "4. Um pedaço de tecido preto foi encontrado preso na fechadura da sala reservada.",
            "5. Clara mencionou que Victor recebeu uma mensagem anônima no celular pouco antes do crime, mas o aparelho não foi encontrado.",
            "6. Ricardo foi visto saindo da galeria antes do fim do evento, mas ele afirma que foi para uma reunião de emergência.",
            "7. Mariana estava sozinha na sala dos equipamentos de segurança por alguns minutos, mas ela diz que estava ajustando as luzes para a exposição.",
            "8. Leonardo, o segurança, estava de plantão, mas admite que saiu por 10 minutos para fumar.",
        ],
        weapon: "Estatuta de Bronze",
        description: "Na noite de 17 de março de 2025, uma famosa galeria de arte em São Paulo realizou uma exposição privada para um seleto grupo de convidados. Entre as obras expostas estava uma pintura raríssima de um artista renomado, avaliada em milhões de reais. No final da noite, o corpo de Victor Mendes, o curador da galeria, foi encontrado sem vida em uma sala reservada. A pintura valiosa havia desaparecido.",
        guilty: "Mariana Costa",
        motivation: "Ela tinha acesso ao sistema de segurança e desativou as câmeras. Como assistente de Victor, ela sabia como manusear a pintura com cuidado. Além disso, o pedaço de tecido preto pode ser de uma ferramenta que ela usou para forçar a entrada na sala reservada. A mensagem anônima no celular de Victor pode ter sido enviada por ela para atraí-lo até a sala, onde o assassinou com a estátua de bronze e roubou a pintura."
    },
    {
        id: 3,
        title: 'O Desaparecimento da Herdeira',
        image: `${crime}`,
        suspects: [
            "Laura Moreira: A herdeira da família, uma jovem de 28 anos, conhecida por seu estilo de vida extravagante e por ser bastante reservada.",
            "Marcos Moreira: O marido de Laura, um empresário bem-sucedido, mas com dívidas recentes devido a investimentos fracassados.",
            "Isabel Moreira: A irmã mais nova de Laura, que sempre teve uma relação complicada com ela, principalmente após a morte dos pais.",
            "Carlos: O motorista da família, que estava de folga no dia do desaparecimento.",
            "Sofia: A governanta da mansão, que trabalha para a família há mais de 10 anos."
        ],
        info: [
            "1. Laura foi vista pela última vez na biblioteca da mansão, onde estava lendo um livro. O livro foi encontrado aberto na mesa, com uma página rasgada.",
            "2. O celular de Laura foi encontrado no chão do jardim, próximo ao portão de entrada. A tela estava quebrada.",
            "3. As câmeras de segurança da mansão captaram uma figura encapuzada saindo da propriedade por volta das 23h, mas a qualidade da imagem é ruim.",
            "4. Marcos afirma que estava em uma reunião de negócios na cidade na noite do desaparecimento, mas não há testemunhas que confirmem seu paradeiro.",
            "5. Isabel mencionou que ouviu uma discussão entre Laura e Marcos na noite anterior ao desaparecimento, mas não sabe do que se tratava.",
            "6. Carlos, o motorista, estava de folga, mas foi visto por um vizinho dirigindo próximo à mansão por volta das 22h.",
            "7. Sofia, a governanta, disse que viu Laura indo para o jardim por volta das 22h30, mas não a viu retornar.",
        ],
        weapon: "",
        description: "Em uma pequena cidade litorânea, a família Moreira é conhecida por sua vasta fortuna e influência. No dia 18 de março de 2025, Laura Moreira, a herdeira da família, desapareceu sem deixar vestígios. Ela foi vista pela última vez em sua mansão à beira-mar, onde morava com seu marido, sua irmã e alguns funcionários. A polícia foi chamada, mas as pistas são escassas e confusas.",
        guilty: "Marcos Moreira",
        motivation: "Ele tinha dívidas e a herança de Laura resolveria seus problemas financeiros. A discussão que Isabel ouviu pode ter sido sobre o divórcio e a divisão dos bens. O fato de ele não ter um álibi sólido e de o celular de Laura ter sido encontrado quebrado perto do portão de entrada levantam suspeitas sobre seu envolvimento no desaparecimento."
    },
    {
        id: 4,
        title: 'O Ritual da Lua Cheia',
        image: `${crime}`,
        suspects: [
            "Eduardo Silva: A vítima, um jovem que recentemente retornou à cidade após estudar em uma grande cidade. Ele era cético em relação às superstições locais.",
            "Marta Silva: Mãe de Eduardo, uma mulher profundamente religiosa e seguidora das tradições locais.",
            "Rafael: O líder espiritual da comunidade, conhecido por realizar rituais e cerimônias para 'proteger' a cidade.",
            "Clara: Uma jovem da cidade que era próxima de Eduardo e tinha um relacionamento secreto com ele.",
            "José: Um caçador local que frequentemente se aventura na floresta e conhece todos os seus segredos."
        ],
        info: [
            "1. O corpo de Eduardo foi encontrado em uma clareira cercada por velas apagadas e símbolos desenhados no chão com cinzas.",
            "2. A faca cravada no peito de Eduardo é uma peça antiga, usada em rituais locais para 'afastar espíritos malignos'.",
            "3. Eduardo foi visto pela última vez na noite anterior, saindo de casa após uma discussão com sua mãe sobre suas crenças.",
            "4. Rafael foi visto na floresta na noite do crime, mas ele afirma que estava realizando um ritual de proteção para a comunidade.",
            "5. Clara mencionou que Eduardo planejava deixar a cidade para sempre, mas não revelou seus planos a ninguém.",
            "6. José encontrou pegadas próximas à clareira que levam a uma cabana abandonada na floresta.",
            "7. Marta Silva estava em casa na noite do crime, mas vizinhos relataram ouvir gritos vindos de sua casa por volta da meia-noite.",
        ],
        weapon: "Faca Ritualística",
        description: "Em uma pequena cidade isolada nas montanhas, um grupo de moradores vive sob o domínio de tradições antigas e supersticiosas. Na manhã de 19 de março de 2025, o corpo de Eduardo Silva, um jovem de 25 anos, foi encontrado em uma clareira na floresta próxima à cidade. O corpo apresentava marcas de rituais, incluindo símbolos desenhados na pele e uma faca cravada no peito. A lua cheia da noite anterior parece estar ligada ao crime.",
        guilty: "Marta Silva",
        motivation: "Ela é profundamente religiosa e pode ter visto o ceticismo de Eduardo como uma ameaça às tradições da família e da comunidade. Os gritos ouvidos em sua casa na noite do crime sugerem que ela pode ter confrontado Eduardo de forma violenta. Marta, com a ajuda de Rafael, pode ter planejado o assassinato ritualístico para 'purificar' a alma de Eduardo e proteger a comunidade de sua influência 'maligna'."
    },
    {
        id: 5,
        title: 'A Maldição do Rio Negro',
        image: `${crime}`,
        suspects: [
            "Ana Lúcia: A vítima mais recente, uma jovem de 22 anos que trabalhava na fazenda da família. Ela era conhecida por sua curiosidade sobre as lendas locais.",
            "Sebastião: O líder da comunidade, um homem carismático que sempre desencorajou os moradores a investigarem as lendas do rio.",
            "Maria: A avó de Ana Lúcia, uma mulher idosa que é a guardiã das histórias e tradições da comunidade.",
            "João: Um pescador local que afirma ter visto 'coisas estranhas' nas águas do rio durante a noite.",
            "Isabel: Uma jovem que desapareceu há dois meses e foi considerada a primeira vítima da 'maldição'."
        ],
        info: [
            "1. O corpo de Ana Lúcia foi encontrado com marcas de cordas nos pulsos, sugerindo que ela foi amarrada antes de morrer.",
            "2. Os símbolos gravados na pele de Ana Lúcia são semelhantes aos encontrados em antigos artefatos indígenas descobertos nas proximidades.",
            "3. Sebastião foi visto conversando com Ana Lúcia na noite de seu desaparecimento, mas ele afirma que estava apenas dando conselhos sobre o trabalho na fazenda.",
            "4. Maria, a avó de Ana Lúcia, mencionou que a jovem estava investigando uma lenda local sobre um 'espírito vingativo' que habita o rio.",
            "5. João, o pescador, relatou ter visto uma luz estranha sobre as águas do rio na noite do desaparecimento de Ana Lúcia.",
            "6. Uma cabana abandonada próxima ao rio foi encontrada com sinais de uso recente, incluindo velas e objetos rituais.",
            "7. Isabel, a primeira vítima, era conhecida por desafiar abertamente as superstições locais e foi vista discutindo com Sebastião antes de desaparecer.",
        ],
        weapon: "",
        description: "Em uma pequena comunidade rural às margens do Rio Negro, uma série de desaparecimentos inexplicáveis ocorreu nos últimos meses. Três jovens desapareceram sem deixar vestígios, e os moradores acreditam que uma maldição antiga está assombrando a região. No dia 20 de março de 2025, o corpo de Ana Lúcia, a quarta vítima, foi encontrado nas águas escuras do rio. O corpo apresentava marcas de cordas nos pulsos e símbolos estranhos gravados na pele.",
        guilty: "Sebastião",
        motivation: "Ele é o líder da comunidade e tem o poder e a influência para manipular os moradores e encobrir seus crimes. Ele pode estar usando as lendas locais sobre a 'maldição do rio' para assustar as pessoas e evitar que investiguem os desaparecimentos. As marcas de cordas e os símbolos nas vítimas sugerem que ele está realizando rituais para manter o controle sobre a comunidade, eliminando aqueles que desafiam sua autoridade ou ameaçam expor seus segredos. A cabana abandonada é provavelmente o local onde ele realiza esses rituais, e as luzes estranhas vistas por João podem ser parte de suas cerimônias."
    },
    {
        id: 6,
        title: 'A Casa dos Sussurros',
        image: `${crime}`,
        suspects: [
            "Carlos: A vítima, um explorador urbano que estava documentando a mansão.",
            "Elena: Uma historiadora local que estudava a mansão e suas lendas.",
            "Miguel: O guarda noturno da área, que afirma ter visto luzes na mansão na noite da morte de Carlos.",
            "Isabel: Uma moradora local que acredita que a mansão é amaldiçoada.",
            "Rafael: Um colega de Carlos que o acompanhou na exploração, mas desapareceu após o incidente."
        ],
        info: [
            "1. O corpo de Carlos foi encontrado cercado por símbolos antigos desenhados no chão.",
            "2. Uma gravação de áudio feita por Carlos captou sussurros ininteligíveis antes de sua morte.",
            "3. Elena mencionou que a mansão foi construída sobre um antigo cemitério indígena.",
            "4. Miguel relatou ter visto Rafael saindo da mansão na noite do crime, mas Rafael nega ter estado lá.",
            "5. Isabel afirmou que ouviu gritos vindos da mansão na noite da morte de Carlos.",
        ],
        weapon: "",
        description: "Em uma cidade antiga, uma mansão abandonada conhecida como 'Casa dos Sussurros' é o cenário de uma série de mortes inexplicáveis. No dia 21 de março de 2025, o corpo de Carlos, um explorador urbano, foi encontrado no porão da mansão. Ele parecia ter morrido de medo, com os olhos arregalados e marcas de arranhões nas paredes ao seu redor.",
        guilty: "Elena",
        motivation: " Ela usou seu conhecimento sobre a mansão para criar uma armadilha psicológica, usando gravações de sussurros e símbolos para assustar Carlos até a morte. Rafael foi cúmplice, ajudando-a a montar a cena do crime."
    },
    {
        id: 7,
        title: 'O Circo das Sombras',
        image: `${crime}`,
        suspects: [
            "Victor: O mágico morto, conhecido por seus truques perigosos.",
            "Clara: A assistente de Victor, que desapareceu após o crime.",
            "Ricardo: O dono do circo, que tinha dívidas com Victor.",
            "Mariana: Uma trapezista que tinha um caso secreto com Victor.",
            "Pedro: Um palhaço que sempre foi rival de Victor."
        ],
        info: [
            "1. O trailer de Victor foi encontrado trancado por dentro.",
            "2. Clara foi vista discutindo com Victor antes do crime.",
            "3. Ricardo estava em uma reunião de negócios, mas não há testemunhas.",
            "4. Mariana tinha uma foto de Victor e Clara em seu trailer.",
            "5. Pedro foi visto perto do trailer de Victor na noite do crime.",
        ],
        weapon: "",
        description: "Um circo itinerante chegou à cidade, mas após a primeira apresentação, o mágico principal, Victor, foi encontrado morto em seu trailer. O corpo apresentava marcas de queimaduras e um bilhete com a palavra 'Traidor' escrito em sangue.",
        guilty: "Clara",
        motivation: " Ela matou Victor por ciúmes, já que ele estava envolvido com Mariana. Ela trancou o trailer por dentro para criar a ilusão de um crime impossível."
    },
    
]