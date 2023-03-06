# :construction: README em construção ! :construction:
<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você; 
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
---
# indice: Projeto: Blog API.

## Orientações

### Com Docker
    - avisoAntes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. Veja aqui ou na documentação como instalá-lo. No primeiro artigo, você pode substituir onde está com 1.26.0por 1.29.2.
    
    - fonte de informaçãoRode os serviços nodee dbcom o comando docker-compose up -d --build.

    - Lembre-se de parar o mysqlse estiver usando localmente na porta padrão ( 3306), ou adapte, caso queria fazer uso da aplicação em containers;

    - Esses serviços irão inicializar um container chamado blogs_apie outro chamado blogs_api_db;

    - A partir daqui você pode rodar o container blogs_apivia CLI ou abri-lo no VS Code;

    - fonte de informaçãoUse o comando docker exec -it blogs_api bash.

    - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
    - fonte de informaçãoInstale como dependências [ Caso existam ] com npm install. (Instale dentro do container)

    * avisoAtenção: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json(npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker execcitado acima .

    * avisoAtenção: O git dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure como suas credenciais do git dentro do container.

    * avisoAtenção: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

    - brilhos Dica: A extensão Remote - Containers(que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

teste de sequela


### Sem Docker
    * fonte de informaçãoInstale as dependências [ Caso existam ] comnpm install

    -avisoAtenção: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

    -brilhosDica: Para rodar o projeto desta forma, obrigatoriamente você deve ter o nodeinstalado em seu computador.

    -brilhosDica: O avaliador espera que a versão do nodeutilizada seja a 16.

---
## Habilidades:

 - Foi realizado neste projeto o desenvolvimento de uma API e um banco de dados para a produção de conteúdo para um blog!

 - Foi desenvolvido uma aplicação em Node.js usando o pacote sequelizepara  para fazer um CRUD de posts.

 - Foi desenvolvido endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

* Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post;

- é necessária a utilização de categorias para os posts, trabalhando assim, a relação de posts para categoriese decategories para posts.

---
