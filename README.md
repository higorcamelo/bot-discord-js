# Bot para Discord em JavaScript
 Um bot em JavaScript que executa comandos simples, como exibir latência da conexão, exibir imagens e pesquisar vídeos.
 
 Este bot não possui finalidade exata, sendo mais voltado a estudar e compilar o funcionamento de um bot para Discord e do NodeJS.
 
 ## Afazeres:
 - [x] Refazer o leitor de comandos (03/09/21) 
 - [x] Tornar funcional o comando de procurar por imagens (03/09/21)
 - [x] Implementar busca de vídeos no Youtube (04/09/21)
 
 #### Sistema, por ora, finalizado
 
 ## **Changelog**
 
 ### [1.0] - 31/07/21
 
 #### Adicionado
 * !Ping: Responde com "Pong!" e exibe a latência para o envio da resposta
 * !Ajuda: Lista todos os comandos disponíveis
 * !Escolha: Exibe respostas diferentes de acordo com a resposta do usuário, na forma de emoticons, a mensagem do bot

### [1.1] - 03/09/21
 
 #### Modificado
 * O prefixo para comados passou a ser o "-", ficando os comandos por exemplo como -ping, -escolha, etc

 #### Adicionado
 * Novo leitor de comandos, agora permitindo comandos com parametros
 * -imagem: Permite que o bot pesquise por uma imagem e a exiba no chat de texto

 #### Removidos
 * -ajuda, devido um problema de compatibilidade com o novo leitor de comandos, -ajuda teve de ser removido até sua futura  correção

### [1.2] - 26/09/21

#### Adicionado
* -video: Exibe no chat um link para um video que o usuário escolher, contendo thumbnail, titulo, e demais informações
* -ajuda: Recriado, voltando a exibir os comandos disponiveis para o bot
* Inseridos comentarios para melhorar leitura do código

#### Modificado
* O arquivo main do bot foi renomeado para "botIndex", aproximando-se mais do padrão usado em bots
